import React, { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks, selectBooksWithAuthors } from '../store/book'
import { selectIsLoading, selectNotificationList } from '../store/ui'

const App = (): ReactElement => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const books = useSelector(selectBooksWithAuthors)
  const notifications = useSelector(selectNotificationList)

  useEffect(() => {
    dispatch(fetchBooks())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1>Redux Store and Messaging System</h1>
      <p>Loading: {isLoading ? 'yes' : 'no'}</p>
      <p>Notifications: {notifications}</p>
      {books ? (
        <pre><code>{JSON.stringify(books, null, 2)}</code></pre>
      ) : null}
    </div>
  )
}

export default App
