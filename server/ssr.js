import express                   from 'express'
import { renderApp, renderHtml } from './ssr-helpers.js'    
import App                       from '../src/app.js'
import Html                      from '../src/html.js'
import assets                    from '../dist/assets.json'
import configureStore            from '../src/store'
import { ServerStyleSheet }      from 'styled-components'

const router = express.Router()
const store = configureStore({}, {})

router.get('/',  async (req, res) => {  
  const sheet = new ServerStyleSheet()
  const location = req.url
  const context = {}

  renderApp({ store, context, location, sheet, App })
    .then(({ html: content }) => {

      if (context.status) {
        res.status(context.status)
      }

      if (context.url) {
        res.redirect(context.url)
      } else {
        const initialState = store.getState()
        res.send(renderHtml({ initialState, content, sheet, Html, assets }))
      }

    })
  
})

export default router