import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { selectIsLoading, selectNotifications } from '../store/ui'
import Notifications from './Notifications'

const System = (): ReactElement => {
  const isLoading = useSelector(selectIsLoading)
  const notifications = useSelector(selectNotifications)

  return (
    <div>
      <p className='mid-emphasis'>Network:</p>
      <p>{isLoading ? 'FETCHING' : 'IDLE'}</p>
      <hr />

      <p className='mid-emphasis'>Notifications:</p>
      {notifications?.length > 0
        ? <Notifications notifications={notifications} />
        : <p>No messages</p>}
      <hr />
    </div>
  )
}

export default System
