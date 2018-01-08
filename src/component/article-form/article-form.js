import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addArticle } from '../../redux/admin.redux'

import style from './article-form.less'

/**
 * 添加文章或修改文章的表单
 */
@connect(
  state => state,
  {addArticle}
)
@withRouter
class ArticleForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      author: '',
      tags: '',
      type: 'study',
      summary: '',
      content: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(key, e) {
    this.setState({
      [key]: e.target.value
    })
  }
  handleSubmit() {
    this.props.addArticle(this.state)
  }
  componentWillMount() {
    console.log(this.props);
    if (this.props.match.path.startsWith('/admin/edit')) {
      axios.get(`/article/content?article_id=${this.props.article_id}`)
      .then(res => {
        if (res.status === 200 && res.data.code === 1) {
          this.setState({
            title: res.data.data.title,
            author: res.data.data.author,
            tags: res.data.data.tags,
            type: res.data.data.type,
            summary: res.data.data.summary,
            content: res.data.data.content,
          })
        }
      })
    }

  }
  render() {
    return (
      <div className={style.article_form}>
        <div>
          <label htmlFor='add-title'>标 题 ：</label>
          <input id='add-title' type='text' value={this.state.title} onChange={v => this.handleChange('title', v)} />
        </div>
        <div>
          <label htmlFor='add-author'>作 者 ：</label>
          <input id='add-author' type='text' value={this.state.author} onChange={v => this.handleChange('author', v)} />
        </div>
        <div>
          <label htmlFor='add-type'>分 类 ：</label>
          {/* <input id='add-type' type='text' onChange={v => this.handleChange('type', v)} /> */}
          <select value={this.state.type} onChange={v => this.handleChange('type', v)}>
            <option value='study'>study</option>
            <option value='life'>life</option>
          </select>
        </div>
        <div>
          <label htmlFor='add-tags'>标 签 ：</label>
          <input id='add-tags' type='text' value={this.state.tags} onChange={v => this.handleChange('tags', v)} />
        </div>
        <div>
          <label htmlFor='add-summary'>简 介 ：</label>
          <textarea id='add-summary' rows='3' cols='50' value={this.state.summary} onChange={v => this.handleChange('summary', v)} />
        </div>
        <div>
          <label htmlFor='add-content'>内 容 ：</label>
          <textarea id='add-content' rows='13' cols='50' value={this.state.content} onChange={v => this.handleChange('content', v)} />
        </div>
        <div>
          <button onClick={this.handleSubmit}>新 增</button>
        </div>
      </div>
    )
  }
}

export default ArticleForm
