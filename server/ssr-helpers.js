import React                    from 'react'
import { renderToString }       from 'react-router-server'
import { renderToStaticMarkup } from 'react-dom/server'
import { Provider }             from 'react-redux'
import { StaticRouter }         from 'react-router'
import serialize                from 'serialize-javascript'

export const renderApp = ({ store, context, location, sheet, App }) => {
  const app = sheet.collectStyles(
    <Provider store={store}>
      <StaticRouter context={context} location={location}>
        <App />
      </StaticRouter>
    </Provider>
  )
  return renderToString(app)
}

export const renderHtml = ({ initialState, content, sheet, Html, assets }) => {
  const styles = sheet.getStyleElement()
  const state = `window.__INITIAL_STATE__ = ${serialize(initialState)}`
  const html = <Html {...{ styles, assets, state, content }} />
  return `<!doctype html>\n${renderToStaticMarkup(html)}`
}