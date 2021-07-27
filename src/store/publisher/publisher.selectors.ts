import { RootState } from '../store'
import { Publisher } from '../../models'

export function selectPublisher(state: RootState): Publisher | null {
  return state.publisher.data
}
