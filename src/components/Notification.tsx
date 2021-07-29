import React, { ReactElement, memo } from 'react'
import { useDispatch } from 'react-redux'
import { Notification as NotificationModel } from '../models'
import { removeNotification } from '../store/ui'

interface Props {
  notification: NotificationModel;
}

const Notification = ({ notification }: Props): ReactElement => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(removeNotification(notification.id))
  }

  return (
    <div className='notification'>
      <p>{notification.text}</p>
      <span onClick={handleDelete}>&#9760;</span>
    </div>
  )
}

export default memo(Notification)
