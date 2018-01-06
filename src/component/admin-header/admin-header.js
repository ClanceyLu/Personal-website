import React from 'react'
import { connect } from 'react-redux'

import { getCookie } from '../../util'
import style from './admin-header.less'
@connect(
  state => state.admin
)
class AdminHeader extends React.Component {
  render() {
    return (
      <div className={style.header}>
        <div className={style.user}>
          <span>Admin</span>
          <div>
            <ul>
              <li>修改密码</li>
              <li>退出</li>
            </ul>
          </div>
        </div>
        <div className={style.message}>信息</div>
      </div>
    )
  }
}

export default AdminHeader
