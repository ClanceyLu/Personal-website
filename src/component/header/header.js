import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import style from './header.less'

@withRouter
class Header extends React.Component {
  render() {
    return (
      <header className={style.header}>
        <div className={style.container}>
          <h1>ClanceyLu</h1>
          <nav>
            <ul>
              <li>
                <Link className={this.props.location.pathname === '/' ? style.active : null} to='/'>首页</Link>
              </li>
              <li>
                <Link className={this.props.location.pathname === '/study' ? style.active : null} to='/study'>学海无涯</Link>
              </li>
              <li>
                <Link className={this.props.location.pathname === '/life' ? style.active : null} to='/life'>品味生活</Link>
              </li>
              <li>
                <Link className={this.props.location.pathname === '/about' ? style.active : null} to='/about'>关于</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
