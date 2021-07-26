import React, { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks, selectBooksWithAuthors } from '../store/book'
import System from './System'

const App = (): ReactElement => {
  const dispatch = useDispatch()
  const books = useSelector(selectBooksWithAuthors)

  useEffect(() => {
    dispatch(fetchBooks())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='layout'>
      <main>
        <h1>Redux Store and Messaging System</h1>
        {books ? (
          <pre><code>{JSON.stringify(books, null, 2)}</code></pre>
        ) : null}
      </main>
      <aside>
        <System />
      </aside>
    </div>
  )
}

export default App
