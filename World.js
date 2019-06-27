import React from 'react';
import {store} from './store'

export default ({ name }) => {
  const onClick = () => {
    store.dispatch({
      type: 'SYNC'
    })
  }
  return <h1>
     <input type="button" value="hello" onClick={onClick} />
  </h1>
}
