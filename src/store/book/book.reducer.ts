import { AnyAction } from 'redux'
import produce from 'immer'
import { Book } from '../../models'
import { isSetBooksAction, isSelectBookAction } from './book.actions'

interface BookState {
  data: Book[];
  selected: string | null;
}

const initialState: BookState = {
  data: [],
  selected: null,
}

export function booksReducer(state = initialState, action: AnyAction): BookState {
  return produce(state, (draft) => {
    if (isSetBooksAction(action)) {
      draft.data = action.payload
    } else if (isSelectBookAction(action)) {
      draft.selected = action.payload
    } else {
      return draft
    }
  })
}
