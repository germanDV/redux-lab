import { AnyAction } from 'redux'
import produce from 'immer'
import { Author } from '../../models'
import { isSetAuthorsAction } from './author.actions'

interface AuthorState {
  data: Author[];
}

const initialState: AuthorState = {
  data: [],
}

export function authorsReducer(state = initialState, action: AnyAction): AuthorState {
  return produce(state, (draft) => {
    if (isSetAuthorsAction(action)) {
      draft.data = action.payload
    } else {
      return draft
    }
  })
}
