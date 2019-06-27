import { createStore } from 'redux'

export const store = createStore((state = '', action) => {
  switch(action.type) {
    case 'SYNC': 
      return 'sync';
    case 'ASYNC':
      return 'async';
    default:
      return state;
  }
})
