import React from 'react'
import { Link } from 'react-router-dom'

import style from './accordion.less'

/**
 * 手风琴导航
 */
class Accordion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      accordionList: [
        {
          title: '文章列表',
          children: [
            {
              title: '文章分类',
              link: '/admin/a'
            },
            {
              title: '文章查询',
              link: '/admin/b'
            },
          ]
        },
        {
          title: '文章编辑',
          children: [
            {
              title: '新增文章',
              link: '/admin/add'
            },
            {
              title: '编辑文章',
              link: '/admin/edit'
            },
          ]
        },
      ],
      show: ''
    }
    this.show = this.show.bind(this)

  }
  /**
   * 判断手风琴是否显示
   * @param {string} 标题
   */
  show(t) {
    // 如果已打开，关闭
    t = t === this.state.show ? '' : t
    this.setState({
      show: t
    })
  }
  render() {
    return (
      <div className={style.accordion}>
        <h2 className={style.logo}>Clancey</h2>
        <ul>
          {this.state.accordionList.map((v) => (
            <li key={v.title} className={this.state.show === v.title ? style.show : null}>
              <div onClick={() => this.show(v.title)}>{v.title}</div>
              <ul>
                {v.children.map(e => <li key={e.title}><Link to={e.link}>{e.title}</Link></li>)}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Accordion
