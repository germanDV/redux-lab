import { RootState } from '../store'
import { Author } from '../../models'

export function selectAuthors(state: RootState): Author[] {
  return state.authors.data
}
