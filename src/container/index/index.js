import React from 'react'


import Article from '../../component/article/article'
import Info from '../../component/info/info'
import Tag from '../../component/tag/tag'
import style from './index.less'
/**
 * 首页
 */
class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: ['JavaScript', 'React', 'Redux', 'CSS', '电影', 'aa', 'ssssssssssssss', 'b'],
      articles: [
        {id: 'asd123', title: '齐物论', author: '南华真人'},
        {id: 'asd124', title: 'Hello', author: 'Clancey'},
      ]
    }
  }
  render() {
    return (
      <div className={style.flex}>
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

export default Index
