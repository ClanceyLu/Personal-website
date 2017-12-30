import React from 'react'
import { connect } from 'react-redux'

import Article from '../../component/article/article'
import Info from '../../component/info/info'
import Tag from '../../component/tag/tag'
import style from './life.less'
import { getArticle } from '../../redux/article.redux'

@connect(
  state => state.article,
  {getArticle}
)
class Life extends React.Component {
  constructor(props) {
    super(props)
    this.props.getArticle('life')
  }
  render() {
    return (
      <div className={style.life}>
        <div className={style.content}>
          <main>
            {this.props.articles.map((v) => <Article article={v} key={v._id} />)}
          </main>
          <aside>
            <Info />
            <Tag tags={this.props.tags} />
          </aside>
        </div>
      </div>
    )
  }
}

export default Life
