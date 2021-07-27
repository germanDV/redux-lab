import { createSelector } from 'reselect'
import { RootState } from '../store'
import { Author, Book, BookWithAuthor } from '../../models'
import { selectAuthors } from '../author'

export function selectBooks(state: RootState): Book[] {
  return state.books.data
}

export function selectSelectedBookId(state: RootState): string | null {
  return state.books.selected
}

export const selectBooksWithAuthors = createSelector(
  [selectBooks, selectAuthors],
  (books, authors) => {
    const booksWithAuthor: BookWithAuthor[] = []

    books.forEach(b => {
      const auth: Author[] = []
      b.author.forEach(authorId => {
        const author = authors.find(a => a.id === authorId)
        if (author) {
          auth.push(author)
        }
      })
      booksWithAuthor.push({ ...b, author: auth })
    })

    return booksWithAuthor
  },
)

export const selectSelectedBook = createSelector(
  [selectBooks, selectSelectedBookId],
  (books, id) => {
    return books.find(b => b.id === id)
  },
)

export const selectOtherBooksByAuthor = createSelector(
  [selectSelectedBook, selectBooks],
  (selected, books) => {
    if (!selected) {
      return null
    }

    const selectedAuthorIds = selected.author
    const otherBooks: Book[] = []

    books.forEach(book => {
      if (book.id !== selected.id && book.author.some(a => selectedAuthorIds.includes(a))) {
        otherBooks.push(book)
      }
    })

    return otherBooks
  },
)
