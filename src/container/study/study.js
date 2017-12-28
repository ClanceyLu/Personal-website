import React from 'react'

import Article from '../../component/article/article'
import Info from '../../component/info/info'
import Tag from '../../component/tag/tag'
import style from './study.less'
class Study extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: ['JavaScript', 'React', 'Redux', 'CSS', '电影', 'aa', 'ssssssssssssss', 'b'],
      articles: [
        {id: 'asd127', title: 'ES6', author: 'Clancey'},
        {id: 'asd128', title: 'React', author: 'Clancey'},
      ]
    }
  }
  render() {
    return (
      <div className={style.study}>
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

export default Study
