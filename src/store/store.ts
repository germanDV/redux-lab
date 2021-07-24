import { applyMiddleware, combineReducers, createStore, Middleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import booksReducer, { booksMdw } from './book'
import uiReducer from './ui'
import { apiMdw } from './api'

export interface Action<P, M> {
  type: string;
  payload: P;
  meta: M;
}

const rootReducer = combineReducers({
  books: booksReducer,
  ui: uiReducer,
})

const domainMdw: Middleware[] = [booksMdw]
const coreMdw: Middleware[] = [apiMdw]
const enhancer = composeWithDevTools(applyMiddleware(...domainMdw, ...coreMdw))
const preloadedState = {}

const store = createStore(rootReducer, preloadedState, enhancer)

export type RootState = ReturnType<typeof store.getState>
export default store
