import React from 'react';
import {store} from './store.js'

export default ({ name }) => {
  store.subscribe(() => {
    console.log(store.getState())
  })
  
  return <h1>
    
  </h1>
}
