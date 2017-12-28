import React from 'react'

import Article from '../../component/article/article'
import Info from '../../component/info/info'
import Tag from '../../component/tag/tag'
import Breadcrumb from '../../component/breadcrumb/breadcrumb'
import style from './about.less'
class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: ['JavaScript', 'React', 'Redux', 'CSS', '电影', 'aa', 'ssssssssssssss', 'b'],
      crumbs: [
        {title: 'About', href: '/about'},
      ]
    }
  }
  render() {
    return (
      <div className={style.about}>
        <div className={style.content}>
          <main>
            <Breadcrumb crumbs={this.state.crumbs} />
            <h2>关于我</h2>
            <p>一个励志成为全栈工程师的小白</p>
            <p>热爱技术，喜欢开源</p>
            <h2>关于本站</h2>
            <p>本站使用React构建</p>
            <p>源码在<a href='https://github.com/ClanceyLu/my-website'>github</a>开源</p>
          </main>
          <aside>
            <Info />
            <Tag tags={this.state.tags} />
          </aside>
        </div>
      </div>
    )
  }
}

export default About
