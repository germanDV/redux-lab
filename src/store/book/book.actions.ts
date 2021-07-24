import { AnyAction } from 'redux'
import { Book } from '../../models'
import { Action } from '../store'

// Domain name
export const BOOKS = '[BOOKS]'

// Action types
export const FETCH_BOOKS = `${BOOKS} FETCH`
export const SET_BOOKS = `${BOOKS} SET`

// Action creators
export type FetchBooksAction = Action<null, null>
export function fetchBooks(): FetchBooksAction {
  return {
    type: FETCH_BOOKS,
    payload: null,
    meta: null,
  }
}

export type SetBooksAction = Action<Book[], { domain: string }>
export function setBooks(books: Book[]): SetBooksAction {
  return {
    type: SET_BOOKS,
    payload: books,
    meta: {
      domain: BOOKS,
    },
  }
}

// Action guards
export function isFetchBooksAction(action: AnyAction): action is FetchBooksAction {
  return action.type === FETCH_BOOKS
}

export function isSetBooksAction(action: AnyAction): action is SetBooksAction {
  return action.type === SET_BOOKS
}
