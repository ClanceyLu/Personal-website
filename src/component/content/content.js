import React from 'react'
import { connect } from 'react-redux'

import { getArticle } from '../../redux/article.redux'

import Article from '../../component/article/article'
import Info from '../../component/info/info'
import Tag from '../../component/tag/tag'
import style from './content.less'

@connect(
  state => state.article,
  {getArticle}
)
class Content extends React.Component {
  constructor(props) {
    super(props)
    this.props.getArticle(this.props.type)
  }
  render() {
    return (
      <div className={style.content}>
        <div className={style.main}>
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

export default Content
