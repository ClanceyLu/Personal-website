import React from 'react'

import Article from '../../component/article/article'
import Info from '../../component/info/info'
import Tag from '../../component/tag/tag'
import style from './life.less'
class Life extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: ['JavaScript', 'React', 'Redux', 'CSS', '电影', 'aa', 'ssssssssssssss', 'b']
    }
  }
  render() {
    return (
      <div className={style.life}>
        <div className={style.content}>
          <main>
            Life
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

export default Life
