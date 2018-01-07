import React from 'react'
import { Link } from 'react-router-dom'
import style from './breadcrumb.less'
/**
 * 面包屑导航
 * @param {object[]} crumbs 面包屑
 * @param {string} crumbs.href 面包屑链接
 * @param {string} crumbs.title 面包屑名字
 */
class Breadcrumb extends React.Component {
  render() {
    return (
      <div className={style.breadcrumb}>
        <ol>
          {this.props.crumbs.map((v) => (
            <li key={v.title}><Link to={v.href}>{v.title}</Link></li>
          ))}
        </ol>
      </div>
    )
  }
}

export default Breadcrumb
