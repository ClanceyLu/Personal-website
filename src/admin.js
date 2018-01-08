import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import { connect } from 'react-redux'

// 用于获取cookie
import { getCookie } from './util'
// 样式
import style from './admin.less'

// 手风琴导航
import Accordion from './component/accordion/accordion'
// AdminHeader
import AdminHeader from './component/admin-header/admin-header'
// 文章列表
import List from './container/admin/list/list'
// 添加文章
import Add from './container/admin/add/add'
// 编辑文章
import Eidt from './container/admin/edit/edit'

/**
 * 后台管理页面
 */
@connect(
  state => state.admin
)
class Admin extends React.Component {
  componentDidMount() {
    // 如果没有cookie，跳转到登录页
    if (!getCookie('userid')) {
      this.props.history.push('/login')
    }
  }
  render() {
    return (
      <div className={style.admin}>
        <aside>
          <Accordion />
        </aside>
        <main>
          <AdminHeader />
          <Switch>
            <Route path='/admin/list' component={List} />
            <Route path='/admin/add' component={Add} />
            <Route path='/admin/edit/:article_id' component={Eidt} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default Admin
