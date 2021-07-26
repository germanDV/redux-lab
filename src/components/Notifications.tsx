import React, { ReactElement } from 'react'
import { Notification as NotificationModel } from '../models'
import Notification  from './Notification'

interface Props {
  notifications: NotificationModel[];
}

const Notifications = ({ notifications }: Props): ReactElement => {
  return <>{notifications.map(n => <Notification key={n.id} notification={n} />)}</>
}

export default Notifications
