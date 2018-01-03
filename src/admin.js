import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'

// 用于获取cookie
import { getCookie } from './util'
// 样式
import style from './admin.less'

// 手风琴导航
import Accordion from './component/accordion/accordion'
// 添加文章
import Add from './container/admin/add/add'

/**
 * 后台管理页面
 */
class Admin extends React.Component {
  componentDidMount() {
    // 如果没有cookie，跳转到登录页
    if (!getCookie('userid')) {
      this.props.history.push('/admin/login')
    }
  }
  render() {
    return (
      <div className={style.admin}>
        <aside>
          <Accordion />
        </aside>
        <main>
          <Switch>
            <Route path='/admin/add' component={Add} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default Admin
