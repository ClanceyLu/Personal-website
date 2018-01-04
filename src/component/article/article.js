import React from 'react'
import { Link } from 'react-router-dom'

import '../../util.js'
import style from './article.less'

/**
 * 用于展示一篇文章的概述
 * @extends React
 * @param {object} article 文章
 * @param {string} article.id 文章id
 * @param {string} article.title 文章题目
 * @param {string} article.author 文章作者
 */
class Article extends React.Component {
  render() {
    const img = require(`../../static/img/asd124.jpg`)
    const time = new Date(this.props.article.create_time)
    return (
      <article className={style.article}>
        <h2>{this.props.article.title}</h2>
				<p className={style.article_info}>
          <span>作者：</span>
          <a href="javascript:;">{this.props.article.author}</a>
          <span className={style.point}>·</span>
          <time>{time.Format()}</time>
        </p>
				<figure>
					<img src={img} alt="缩略图" />
					<figcaption>
						<p>{this.props.article.summary}</p>
					</figcaption>
				</figure>
				<Link className={style.readmore} to={`/article/${this.props.article._id}`}>阅读全文</Link>
      </article>
    )
  }
}

export default Article
