import { Middleware, AnyAction } from 'redux'
import { RootState } from '../store'
import { PUBLISHER, setPublisher } from './publisher.actions'
import { setLoader, setNotification } from '../ui'
import { isSelectBookAction} from '../book'
import { apiRequest, isApiErrorAction, isApiSuccessAction } from '../api'
import { Publisher } from '../../models'

export const publisherMdw: Middleware<{}, RootState> = (store) => (next) => (action: AnyAction) => {
  next(action)

  if (isSelectBookAction(action)) {
    const state = store.getState()
    const publisherId = state.books.data.find(b => b.id === action.payload)?.publisherId
    next(apiRequest({ domain: PUBLISHER, method: 'GET', url: `/publishers/${publisherId}` }))
    next(setLoader({ domain: PUBLISHER, status: true }))
  } else if (isApiSuccessAction(action) && action.meta.domain === PUBLISHER) {
    next(setPublisher((action.payload as {publisher: Publisher}).publisher ))
    next(setNotification({ domain: PUBLISHER, text: 'Publisher loaded'}))
    next(setLoader({ domain: PUBLISHER, status: false }))
  } else if (isApiErrorAction(action) && action.meta.domain === PUBLISHER) {
    next(setNotification({ domain: PUBLISHER, text: action.payload }))
    next(setLoader({ domain: PUBLISHER, status: false }))
  }
}
