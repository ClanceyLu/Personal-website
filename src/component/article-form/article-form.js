import React from 'react'
import { connect } from 'react-redux'
import { addArticle } from '../../redux/admin.redux'

import style from './article-form.less'

@connect(
  state => state,
  {addArticle}
)
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
  render() {
    console.log(this.state);
    return (
      <div className={style.article_form}>
        <div>
          <label htmlFor='add-title'>标 题 ：</label>
          <input id='add-title' type='text' onChange={v => this.handleChange('title', v)} />
        </div>
        <div>
          <label htmlFor='add-author'>作 者 ：</label>
          <input id='add-author' type='text' onChange={v => this.handleChange('author', v)} />
        </div>
        <div>
          <label htmlFor='add-type'>分 类 ：</label>
          {/* <input id='add-type' type='text' onChange={v => this.handleChange('type', v)} /> */}
          <select onChange={v => this.handleChange('type', v)}>
            <option value='study'>study</option>
            <option value='life'>life</option>
          </select>
        </div>
        <div>
          <label htmlFor='add-tags'>标 签 ：</label>
          <input id='add-tags' type='text' onChange={v => this.handleChange('tags', v)} />
        </div>
        <div>
          <label htmlFor='add-summary'>简 介 ：</label>
          <textarea id='add-summary' rows='5' cols='50' onChange={v => this.handleChange('summary', v)} />
        </div>
        <div>
          <label htmlFor='add-content'>内 容 ：</label>
          <textarea id='add-content' rows='20' cols='50' onChange={v => this.handleChange('content', v)} />
        </div>
        <div>
          <button onClick={this.handleSubmit}>新 增</button>
        </div>
      </div>
    )
  }
}

export default ArticleForm
