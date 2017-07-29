import React, { Component } from 'react'
import { Switch }           from 'react-router-dom'
import Helmet               from 'react-helmet'
import Home                 from './components/home'

export default class App extends Component {

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>BANDIT</title>
          <link rel="canonical" href="http://www.bandit.com" />
        </Helmet>
        <Home />
      </div>
    )
  }

}