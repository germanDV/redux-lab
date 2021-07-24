import { createSelector } from 'reselect'
import { RootState } from '../store'
import { Notification } from '../../models'

export function selectIsLoading(state: RootState): boolean {
  return state.ui.loading
}

export function selectNotifications(state: RootState): Notification[] {
  return state.ui.notifications
}

export const selectNotificationList = createSelector(
  selectNotifications,
  (notifications) => notifications.map(n => n.text).join(', '),
)
