import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import { getCookie } from './util'

import style from './admin.less'

class Admin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userid: getCookie('userid'),
      test: true
    }
    this.show = this.show.bind(this)
  }
  show(t) {
    this.setState({
      test: t
    })
  }
  render() {
    return (
      <Router>
        <div className={style.admin}>
          {this.state.userid ? null : this.props.history.push('/admin/login')}
          <aside>
            <h2 className={style.logo}>Clancey</h2>
            <ul>
              <li className={this.state.test === 'list' ? style.hide : null}>
                <div onClick={() => this.show('list')}>文章列表</div>
                <ul>
                  <li>文章分类</li>
                  <li>文章查询</li>
                </ul>
              </li>
              <li className={this.state.test === 'edit' ? style.hide : null}>
                <div onClick={() => this.show('edit')}>文章编辑</div>
                <ul>
                  <li>添加文章</li>
                  <li>修改文章</li>
                </ul>
              </li>
            </ul>
          </aside>
          <main>
            mian
          </main>
        </div>
      </Router>
    )
  }
}

export default Admin
