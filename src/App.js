import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from 'react-router-dom'

import style from './App.less'
import Admin from './admin'
import Login from './container/admin/login/login'
import Index from './container/index/index'
import Study from './container/study/study'
import Life from './container/life/life'
import About from './container/about/about'
import Readmore from './container/readmore/readmore'

import Header from './component/header/header'
import Footer from './component/footer/footer'

@withRouter
class App extends Component {
  render() {
    return (
      <div className={style.App}>
        {this.props.location.pathname.startsWith('/admin') ? null : <Header />}
        <Switch>
          <Route exact path='/' component={Index} />
          <Route path='/study' component={Study} />
          <Route path='/life' component={Life} />
          <Route path='/about' component={About} />
          <Route path='/article/:article_id' component={Readmore} />
          <Route path='/admin' component={Admin} />
          <Route path='/admin/login' component={Login} />
        </Switch>
        {this.props.location.pathname.startsWith('/admin') ? null : <Footer />}
      </div>
    )
  }
}

export default App
