import { createStore, applyMiddleware } from 'redux'
import {createLogger} from 'redux-logger'

export const store = createStore((state = '', action) => {
  switch(action.type) {
    case 'SYNC': 
      return 'sync';
    case 'ASYNC':
      return 'async';
    default:
      return state;
  }
}, applyMiddleware(createLogger()))
