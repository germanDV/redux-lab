import { AnyAction } from 'redux'
import { Book } from '../../models'
import { Action } from '../store'

// Domain name
export const BOOKS = '[BOOKS]'

// Action types
export const FETCH_BOOKS = `${BOOKS} FETCH`
export const SET_BOOKS = `${BOOKS} SET`
export const SELECT_BOOK = `${BOOKS} SELECT`

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

export type SelectBookAction = Action<string, null>
export function selectBook(bookId: string): SelectBookAction {
  return {
    type: SELECT_BOOK,
    payload: bookId,
    meta: null,
  }
}

// Action guards
export function isFetchBooksAction(action: AnyAction): action is FetchBooksAction {
  return action.type === FETCH_BOOKS
}

export function isSetBooksAction(action: AnyAction): action is SetBooksAction {
  return action.type === SET_BOOKS
}

export function isSelectBookAction(action: AnyAction): action is SelectBookAction {
  return action.type === SELECT_BOOK
}
