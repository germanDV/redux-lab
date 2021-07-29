import { Middleware, AnyAction } from 'redux'
import { RootState } from '../store'
import {isSetNotificationAction, removeNotification} from './ui.actions'

export const uiMdw: Middleware<{}, RootState> = (store) => (next) => (action: AnyAction) => {
  next(action)

  if (isSetNotificationAction(action)) {
    setTimeout(() => {
      next(removeNotification(action.payload.id))
    }, 5_000)
  }
}
