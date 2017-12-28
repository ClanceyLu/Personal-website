import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import style from './App.less'
import Index from './container/index/index'
import About from './container/about/about'

import Header from './component/header/header'
import Footer from './component/footer/footer'

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <Router>
          <div>
            <Header />
            <Route exact path='/' component={Index} />
            <Route path='/about' component={About} />
            <Footer />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
