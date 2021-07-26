import { RootState } from '../store'
import { Notification } from '../../models'

export function selectIsLoading(state: RootState): boolean {
  return state.ui.loading
}

export function selectNotifications(state: RootState): Notification[] {
  return state.ui.notifications
}
