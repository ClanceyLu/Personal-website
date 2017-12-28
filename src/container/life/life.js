import React from 'react'

import Article from '../../component/article/article'
import Info from '../../component/info/info'
import Tag from '../../component/tag/tag'
import style from './life.less'
class Life extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: ['JavaScript', 'React', 'Redux', 'CSS', '电影', 'aa', 'ssssssssssssss', 'b'],
      articles: [
        {title: '品读《沉默的羔羊》', author: 'Clancey'},
        {title: '《心迷宫》', author: 'Clancey'},
      ]
    }
  }
  render() {
    return (
      <div className={style.life}>
        <div className={style.content}>
          <main>
            {this.state.articles.map((v) => <Article article={v} />)}
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
