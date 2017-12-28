import React from 'react'
import { Link } from 'react-router-dom'
import style from './breadcrumb.less'
class Breadcrumb extends React.Component {
  render() {
    return (
      <div className={style.breadcrumb}>
        <ol>
          {this.props.crumbs.map((v) => (
            <li><Link to={v.href}>{v.title}</Link></li>
          ))}
        </ol>
      </div>
    )
  }
}

export default Breadcrumb
