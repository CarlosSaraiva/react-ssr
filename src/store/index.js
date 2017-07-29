import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware                           from 'redux-thunk'
import { createLogger }                          from 'redux-logger'
import {  routerMiddleware }                     from 'react-router-redux'

import rootReducer from './root-reducer.js'
import custom      from './middleware'

export default function configureStore(initialState = {}, history) {

  const logger = createLogger({
    collapsed: true,
    predicate: () => process.env.NODE_ENV === `development`
  })

  const middleware = applyMiddleware(thunkMiddleware, routerMiddleware(history), custom, logger)
  const store = middleware(createStore)(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('./root-reducer.js', () => {
      const nextRootReducer = require('./root-reducer.js').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}