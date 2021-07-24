import { Middleware, AnyAction } from 'redux'
import axios, { Method } from '../../api/axios'
import { RootState } from '../store'
import { apiSuccess, apiError, isApiRequestAction } from './api.actions'

export const apiMdw: Middleware<{}, RootState> = (store) => (next) => async (action: AnyAction) => {
  next(action)

  if (isApiRequestAction(action)) {
    const { method, url, domain } = action.meta
    try {
      const mthd = method.toLowerCase() as Method
      const resp = await axios.request({ method: mthd, url })
      store.dispatch(apiSuccess({ domain, response: resp.data }))
    } catch (error) {
      store.dispatch(apiError({ domain, error }))
    }
  }
}

