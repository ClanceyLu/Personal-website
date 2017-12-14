import React from 'react'

import './header.css'
class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="container">
          <h1 className="logo"></h1>
          <nav>
            <ul>
              <li>
                <a className="active" href="index.html">首页</a>
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
