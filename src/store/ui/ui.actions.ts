import { AnyAction } from 'redux';
import { Action } from '../store'
import { Notification } from '../../models'

// Action types
export const SET_LOADER = 'SET_LOADER'
export const SET_NOTIFICATION = 'SET_NOTIFICATION'

// Action creators
type SetLoaderArgs = { domain: string; status: boolean; }
export type SetLoaderAction = Action<boolean, { domain: string }>
export function setLoader({ domain, status}: SetLoaderArgs): SetLoaderAction {
  return {
    type: `${domain} ${SET_LOADER}`,
    payload: status,
    meta: {
      domain,
    },
  }
}

type SetNotificationArgs = { domain: string; text: string; }
export type SetNotificationAction = Action<Notification, { domain: string }>
export function setNotification({ domain, text}: SetNotificationArgs): SetNotificationAction {
  return {
    type: `${domain} ${SET_NOTIFICATION}`,
    payload: {
      id: Date.now(),
      text,
    },
    meta: {
      domain,
    },
  }
}

// Action guards
export function isSetLoaderAction(action: AnyAction): action is SetLoaderAction {
  return action.type.includes(SET_LOADER)
}

export function isSetNotificationAction(action: AnyAction): action is SetNotificationAction {
  return action.type.includes(SET_NOTIFICATION)
}
