import { AnyAction } from 'redux'
import { Action } from '../store'
import { Author } from '../../models'

// Domain name
export const AUTHORS = '[AUTHORS]'

// Action types
export const FETCH_AUTHORS = `${AUTHORS} FETCH`
export const SET_AUTHORS = `${AUTHORS} SET`

// Action creators
export type FetchAuthorsAction = Action<string, null>
export function fetchAuthors({ ids }: { ids: string[] }): FetchAuthorsAction {
  return {
    type: FETCH_AUTHORS,
    payload: ids.join(','),
    meta: null,
  }
}

export type SetAuthorsAction = Action<Author[], { domain: string }>
export function setAuthors(authors: Author[]): SetAuthorsAction {
  return {
    type: SET_AUTHORS,
    payload: authors,
    meta: {
      domain: AUTHORS,
    },
  }
}

// Action guards
export function isFetchAuthorsAction(action: AnyAction): action is FetchAuthorsAction {
  return action.type === FETCH_AUTHORS
}

export function isSetAuthorsAction(action: AnyAction): action is SetAuthorsAction {
  return action.type === SET_AUTHORS
}
