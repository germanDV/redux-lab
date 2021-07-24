import { RootState } from '../store'
import { Book } from '../../models'

export function selectBooks(state: RootState): Book[] {
  return state.books.data
}
