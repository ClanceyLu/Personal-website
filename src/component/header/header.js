import React from 'react'

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
                <a className={style.active} href="index.html">首页</a>
              </li>
              <li>
                <a href="">学海无涯</a>
              </li>
              <li>
                <a href="javascript:;">品味生活</a>
              </li>

              <li>
                <a href="about.html">关于</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
