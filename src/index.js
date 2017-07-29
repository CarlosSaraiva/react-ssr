import React                    from 'react'
import ReactDOM                 from 'react-dom'
import { Provider }             from 'react-redux'
import configureStore           from './store'
import { ConnectedRouter }      from 'react-router-redux'
import { createBrowserHistory } from 'history'
import App                      from './app'

const initialState = window.__INITIAL_STATE__

const history = createBrowserHistory({
  basename: '/',             // The base URL of the app (see below)
  forceRefresh: false,      // Set true to force full page refreshes
  keyLength: 6,             // The length of location.key
  // A function to use to confirm navigation with the user (see below)
  getUserConfirmation: null
})

const store = configureStore(initialState, history)

const render = Root => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Root />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./app.js', () => { 
    require('./app.js')
    render(App) 
  })
}