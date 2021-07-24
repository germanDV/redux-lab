import { AnyAction } from 'redux'
import produce from 'immer'
import { Book } from '../../models'
import { isSetBooksAction } from './book.actions'

interface BookState {
  data: Book[];
}

const initialState: BookState = {
  data: [],
}

export function booksReducer(state = initialState, action: AnyAction): BookState {
  return produce(state, (draft) => {
    if (isSetBooksAction(action)) {
      draft.data = action.payload
    } else {
      return draft
    }
  })
}
