import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {reducers} from './reducers'
import logger from './middlewares/logger'

const middlewares = applyMiddleware(thunk, logger)
export const store = createStore(reducers, middlewares)
