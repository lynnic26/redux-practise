import { createStore, applyMiddleware } from 'redux'
import {createLogger} from 'redux-logger'

const middlewares = applyMiddleware(createLogger())
const reducer = (state = '', action) => {
  switch(action.type) {
    case 'SYNC': 
      return 'sync';
    case 'ASYNC':
      return 'async';
    default:
      return state;
  }
}
export const store = createStore(reducer, middlewares)
