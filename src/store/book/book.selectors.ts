import { createSelector } from 'reselect'
import { RootState } from '../store'
import { Author, Book, BookWithAuthor } from '../../models'
import { selectAuthors } from '../author'

export function selectBooks(state: RootState): Book[] {
  return state.books.data
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
