import React from 'react'
import { Link } from 'react-router-dom'

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
    const img = require(`../../static/img/${this.props.article.id}.jpg`)
    return (
      <article className={style.article}>
        <h2>{this.props.article.title}</h2>
				<p className={style.article_info}>
          <span>作者：</span>
          <a href="javascript:;">{this.props.article.author}</a>
          <span className={style.point}>·</span>
          <time>2017/12/12</time>
        </p>
				<figure>
					<img src={img} alt="缩略图" />
					<figcaption>
						<p>南郭子綦隐机而坐，仰天而嘘，荅焉似丧其耦。颜成子游立侍乎前，曰：“何居乎？形固可使如槁木，而心固可使如死灰乎？今之隐机者，非昔之隐机者也？”子綦曰：“偃，不亦善乎而问之也！今者吾丧我，汝知之乎？女闻人籁而未闻地籁，女闻地籁而不闻天籁夫！”</p>
					</figcaption>
				</figure>
				<Link className={style.readmore} to={`/article/${this.props.article.id}`}>阅读全文</Link>
      </article>
    )
  }
}

export default Article
