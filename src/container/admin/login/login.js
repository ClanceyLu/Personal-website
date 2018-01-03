import React from 'react'
import { connect } from 'react-redux'

import { login } from '../../../redux/admin.redux'

import { getCookie } from '../../../util'

import style from './login.less'

@connect(
  state => state.admin,
  { login }
)
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userid: '',
      pwd: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(key, e) {
    this.setState({
      [key]: e.target.value
    })
  }
  handleSubmit() {
    this.props.login(this.state)
  }
  render() {
    const userCookieId = getCookie('userid')
    return (
      <div className={style.login}>
        {userCookieId ? this.props.history.push('/admin') : null}
        <div className={style.logo}></div>
        <div className={style.input}>
          {/* <label for='userid'>用户名：</label> */}
          <input id='userid' type='text' placeholder='用户名' onChange={v => this.handleChange('userid', v)} />
          {/* <label for='pwd'>密 码：</label> */}
          <input id='pwd' type='password' placeholder='密码' onChange={v => this.handleChange('pwd', v)}/>
          <button onClick={this.handleSubmit}>登录<div></div></button>
        </div>
      </div>
    )
  }
}

export default Login
