import React from 'react';
import {store} from './store'

export default () => {
  const onClick = () => {
    store.dispatch({
      type: 'SYNC'
    })
  }
  return <h1>
     <input type="button" value="hello, dispatch sync" onClick={onClick} />
  </h1>
}
