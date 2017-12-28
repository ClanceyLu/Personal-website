import React from 'react'

import Article from '../../component/article/article'
import Info from '../../component/info/info'
import Tag from '../../component/tag/tag'
import style from './about.less'
class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: ['JavaScript', 'React', 'Redux', 'CSS', '电影', 'aa', 'ssssssssssssss', 'b']
    }
  }
  render() {
    return (
      <div className={style.about}>
        <div className={style.content}>
          <main>
            about me
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
