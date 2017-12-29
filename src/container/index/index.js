import React from 'react'
import { connect } from 'react-redux'

import Article from '../../component/article/article'
import Info from '../../component/info/info'
import Tag from '../../component/tag/tag'

import { getArticle } from '../../redux/article.redux'

import style from './index.less'
/**
 * 首页
 */
@connect(
  state => state.article,
  {getArticle}
)
class Index extends React.Component {
  constructor(props) {
    super(props)
    this.props.getArticle()
    console.log(this.props);
  }
  render() {
    return (
      <div className={style.flex}>
        <div className={style.content}>
          <main>
            {this.props.articles.map((v) => <Article article={v} key={v.id} />)}
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

export default Index
