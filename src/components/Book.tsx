import React, { ReactElement, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { BookWithAuthor } from '../models'
import { selectBook } from '../store/book'

interface Props {
  book: BookWithAuthor
}

const Book = ({ book }: Props): ReactElement => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(selectBook(book.id))
  }

  const authorsList = useMemo(() => {
    return book.author.map(a => a.name).join(', ')
  }, [book.author])

  return (
    <div className='book-box' onClick={handleClick}>
      <h2>{book.title}</h2>
      <p>[{book.year}] {authorsList} <em>({book.genres.join(' - ')})</em></p>
    </div>
  )
}

export default Book
