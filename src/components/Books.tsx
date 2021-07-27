import React, { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks, selectBooksWithAuthors } from '../store/book'
import Book from './Book'

const Books = (): ReactElement => {
  const dispatch = useDispatch()
  const books = useSelector(selectBooksWithAuthors)

  useEffect(() => {
    dispatch(fetchBooks())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (!books || books.length === 0) {
    return <p>Library is empty.</p>
  }

  return <>{books.map(b => <Book key={b.id} book={b} />)}</>
}

export default Books
