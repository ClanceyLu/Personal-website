import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import style from './App.less'
import Index from './container/index/index'
import Study from './container/study/study'
import Life from './container/life/life'
import About from './container/about/about'
import Readmore from './container/readmore/readmore'

import Header from './component/header/header'
import Footer from './component/footer/footer'

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path='/' component={Index} />
              <Route path='/study' component={Study} />
              <Route path='/life' component={Life} />
              <Route path='/about' component={About} />
              <Route path='/article/:article_id' component={Readmore} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
