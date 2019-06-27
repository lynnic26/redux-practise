import React from 'react';
import {store} from './store'
import {getCountAsync} from './actions'

export default () => {
  const onClickSync = () => {
    store.dispatch({
      type: 'SYNC'
    })
  }
  const onClickAsync = () => {
    store.dispatch(getCountAsync())
  }
  return <h1>
     <input type="button" value="hello, dispatch sync" onClick={onClickSync} /><br/>
     <input type="button" value="hello, dispatch async" onclick={onClickAsync} />
  </h1>
}
