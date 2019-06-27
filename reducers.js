import { GET_COUNT_ASYNC } from './actions';

export const reducers = (state = '', action) => {
  switch(action.type) {
    case 'SYNC': 
      return 'sync';
    case GET_COUNT_ASYNC:
      return action.payload;
    default:
      return state;
  }
}