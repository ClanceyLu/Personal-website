import React, { Component } from 'react'
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom'

// 样式
import style from './App.less'
// 后台页面
import Admin from './admin'
// 登录页面
import Login from './container/admin/login/login'

// 把首页提成组件

// 首页
import Index from './container/index/index'
// 分类为“学海无涯”的页面
import Study from './container/study/study'
// 分类为“品味生活”的页面
import Life from './container/life/life'
// 关于页面
import About from './container/about/about'
// 文章阅读页面
import Readmore from './container/readmore/readmore'

import Header from './component/header/header'
import Footer from './component/footer/footer'

@withRouter
class App extends Component {
  render() {
    return (
      <div className={style.App}>
        {/* 如果是访问admin，就不用header */}
        {this.props.location.pathname.startsWith('/admin') ? null : <Header />}
        <div className={style.flex}>
          <Switch>
            <Route exact path='/' component={Index} />
            <Route path='/study' component={Study} />
            <Route path='/life' component={Life} />
            <Route path='/about' component={About} />
            <Route path='/article/:article_id' component={Readmore} />
            <Route path='/admin' component={Admin} />
            <Route path='/admin/login' component={Login} />
          </Switch>
        </div>
        {/* 如果是访问admin，就不用footer */}
        {this.props.location.pathname.startsWith('/admin') ? null : <Footer />}
      </div>
    )
  }
}

export default App
