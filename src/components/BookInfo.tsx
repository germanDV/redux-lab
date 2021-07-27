import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { selectSelectedBook, selectOtherBooksByAuthor } from '../store/book'

const BookInfo = (): ReactElement | null => {
  const book = useSelector(selectSelectedBook)
  const otherBooks = useSelector(selectOtherBooksByAuthor)

  if (!book) return null

  return (
    <>
      <h3>BOOK INFO:</h3>
      <p className='mid-emphasis'>Title:</p>
      <p>{book.title}</p>

      <p className='mid-emphasis'>Year:</p>
      <p>{book.year}</p>

      <p className='mid-emphasis'>Publisher:</p>
      <p>{book.publisherId}</p>

      {otherBooks && otherBooks.length > 0
        ? (
          <>
            <p className='mid-emphasis'>Others by same author(s):</p>
            {otherBooks.map(i => <p key={i.id}>{i.title}</p>)}
          </>
        )
        : null}
    </>
  )
}

export default BookInfo
