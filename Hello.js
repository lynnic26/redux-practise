import React from 'react';
import {store} from './store.js'

const { useState } = React
export default () => {
  const [name, setName] = useState('')
  
  store.subscribe(() => {
    setName(store.getState())
  })
  
  return <h1>
    {name}
  </h1>
}
