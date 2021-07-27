import { AnyAction } from 'redux'
import { Action } from '../store'
import { Publisher } from '../../models'

// Domain name
export const PUBLISHER = '[PUBLISHER]'

// Action types
export const FETCH_PUBLISHER = `${PUBLISHER} FETCH`
export const SET_PUBLISHER = `${PUBLISHER} SET`

// Action creators
export type FetchPublisherAction = Action<null, null>
export function fetchPublisher(): FetchPublisherAction {
  return {
    type: FETCH_PUBLISHER,
    payload: null,
    meta: null,
  }
}

export type SetPublisherAction = Action<Publisher, { domain: string }>
export function setPublisher(publisher: Publisher): SetPublisherAction {
  return {
    type: SET_PUBLISHER,
    payload: publisher,
    meta: {
      domain: PUBLISHER,
    },
  }
}

// Action guards
export function isFetchPublisherAction(action: AnyAction): action is FetchPublisherAction {
  return action.type === FETCH_PUBLISHER
}

export function isSetPublisherAction(action: AnyAction): action is SetPublisherAction {
  return action.type === SET_PUBLISHER
}
