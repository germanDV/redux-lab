import { AnyAction } from 'redux'
import produce from 'immer'
import { Notification } from '../../models'
import { isSetLoaderAction, isSetNotificationAction, isRemoveNotificationAction } from './ui.actions'

interface UIState {
  loading: boolean;
  notifications: Notification[];
}

const initialState: UIState = {
  loading: false,
  notifications: [],
}

export function uiReducer(state = initialState, action: AnyAction): UIState {
  return produce(state, (draft) => {
    if (isSetLoaderAction(action)) {
      draft.loading = action.payload
    } else if (isSetNotificationAction(action)) {
      draft.notifications.unshift(action.payload)
    } else if (isRemoveNotificationAction(action)) {
      draft.notifications = draft.notifications.filter(n => n.id !== action.payload)
    } else {
      return draft
    }
  })
}
