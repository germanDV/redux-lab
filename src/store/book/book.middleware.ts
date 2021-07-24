import { Middleware, AnyAction } from 'redux'
import { RootState } from '../store';
import { BOOKS, setBooks, isFetchBooksAction } from './book.actions'
import { setLoader, setNotification } from '../ui'
import { apiRequest, isApiSuccessAction, isApiErrorAction } from '../api'
import { Book } from '../../models';

export const booksMdw: Middleware<{}, RootState> = (_store) => (next) => (action: AnyAction) => {
  next(action)

  if (isFetchBooksAction(action)) {
    next(apiRequest({ domain: BOOKS, method: 'GET', url: '/books' }))
    next(setLoader({ domain: BOOKS, status: true }))
  } else if (isApiSuccessAction(action) && action.meta?.domain === BOOKS) {
    next(setBooks((action.payload || []) as Book[]))
    next(setLoader({ domain: BOOKS, status: false }))
    next(setNotification({ domain: BOOKS, text: 'Books loaded' }))
  } else if (isApiErrorAction(action) && action.meta?.domain === BOOKS) {
    next(setNotification({ domain: BOOKS, text: action.payload }))
    next(setLoader({ domain: BOOKS, status: false }))
  }
}
