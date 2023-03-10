import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { selectSelectedBook, selectOtherBooksByAuthor } from '../store/book'
import { selectPublisher } from '../store/publisher'

const BookInfo = (): ReactElement | null => {
  const book = useSelector(selectSelectedBook)
  const otherBooks = useSelector(selectOtherBooksByAuthor)
  const publisher = useSelector(selectPublisher)

  if (!book) return null

  return (
    <>
      <h3>BOOK INFO:</h3>
      <p className='mid-emphasis'>Title:</p>
      <p>{book.title}</p>

      <p className='mid-emphasis'>Year:</p>
      <p>{book.year}</p>

      {publisher
        ? (
          <>
            <p className='mid-emphasis'>Publisher:</p>
            <p>{publisher.name}</p>
          </>
        )
        : null
      }

      {otherBooks && otherBooks.length > 0
        ? (
          <>
            <p className='mid-emphasis'>Others by same author(s):</p>
            {otherBooks.map(i => <p key={i.id}>{i.title}</p>)}
          </>
        )
        : null
      }
    </>
  )
}

export default BookInfo
