import { AnyAction } from 'redux'
import produce from 'immer'
import { Publisher } from '../../models'
import { isSetPublisherAction } from './publisher.actions'

interface PublisherState {
  data: Publisher | null;
}

const initialState: PublisherState = {
  data: null,
}

export function publisherReducer(state = initialState, action: AnyAction): PublisherState {
  return produce(state, (draft) => {
    if (isSetPublisherAction(action)) {
      draft.data = action.payload
    } else {
      return draft
    }
  })
}
