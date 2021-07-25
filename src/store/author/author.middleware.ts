import { Middleware, AnyAction } from 'redux'
import { RootState } from '../store'
import { AUTHORS, isFetchAuthorsAction, setAuthors } from './author.actions'
import { apiRequest, isApiErrorAction, isApiSuccessAction } from '../api'
import { setLoader, setNotification } from '../ui'
import { Author } from '../../models'

export const authorsMdw: Middleware<{}, RootState> = (_store) => (next) => (action: AnyAction) => {
  next(action)

  if (isFetchAuthorsAction(action)) {
    next(apiRequest({ domain: AUTHORS, method: 'GET', url: `/authors?ids=${action.payload}`}))
    next(setLoader({ domain: AUTHORS, status: true }))
  } else if (isApiSuccessAction(action) && action.meta.domain === AUTHORS) {
    next(setAuthors((action.payload as {authors: Author[]}).authors))
    next(setLoader({ domain: AUTHORS, status: false }))
    next(setNotification({ domain: AUTHORS, text: 'Authors loaded' }))
  } else if (isApiErrorAction(action) && action.meta.domain === AUTHORS) {
    next(setNotification({ domain: AUTHORS, text: action.payload }))
    next(setLoader({ domain: AUTHORS, status: false }))
  }
}
