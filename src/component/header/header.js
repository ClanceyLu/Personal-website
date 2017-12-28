import React from 'react'
import { Link } from 'react-router-dom'

import style from './header.less'
class Header extends React.Component {
  render() {
    return (
      <header className={style.header}>
        <div className={style.container}>
          <h1>ClanceyLu</h1>
          <nav>
            <ul>
              <li>
                <Link className={style.active} to='/'>首页</Link>
                {/* <a className={style.active} href="index.html">首页</a> */}
              </li>
              <li>
                <Link to='/study'>学海无涯</Link>
              </li>
              <li>
                <Link to='/life'>品味生活</Link>
              </li>

              <li>
                <Link to='/about'>关于</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
