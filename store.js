import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import {reducers} from './reducers'

const middlewares = applyMiddleware(thunk, createLogger())

export const store = createStore(reducers, middlewares)
