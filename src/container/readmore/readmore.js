import React from 'react'
import { connect } from 'react-redux'

import Info from '../../component/info/info'
import Tag from '../../component/tag/tag'
import Breadcrumb from '../../component/breadcrumb/breadcrumb'
import style from './readmore.less'

import { getArticleContent } from '../../redux/article.redux'

/**
 * 阅读文章
 * @param {object} article 文章
 * @param {string} article.title 文章标题
 * @param {string} article.author 文章作者
 * @param {string} article.main 文章内容
 */
@connect(
  state => state.article,
  {getArticleContent}
)
class Readmore extends React.Component {
  constructor(props) {
    super(props)
    const article_id = this.props.match.params.article_id
    this.props.getArticleContent(article_id)
    this.state = {
      crumbs: [
        {title: '品味生活', href: '/app/life'},
        {title: '齐物论', href: '/app/article/asd123'},
      ]
    }
  }
  render() {

    // const thisArticle = this.props.articles.find((v) => v._id === article_id)
    // console.log(thisArticle);
    return (
      <div className={style.readmore}>
        <div className={style.content}>
          <main>
            <Breadcrumb crumbs={this.state.crumbs} />
            <h2>{this.props.thisArticle.title}</h2>
            <p className={style.article_info}>
              <span>作者：</span>
              <a href="javascript:;">{this.props.thisArticle.author}</a>
              <span className={style.point}>·</span>
              <time>2017/12/12</time>
            </p>
            <section>
              <p>{this.props.thisArticle.content}</p>
            </section>
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

export default Readmore
