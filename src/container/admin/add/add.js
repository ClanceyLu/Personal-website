import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { addArticle } from '../../../redux/admin.redux'

@connect(
  state => state,
  {addArticle}
)
class Add extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      author: '',
      tags: '',
      type: '',
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
    return (
      <div>
        <p>
          <label htmlFor='add-title'>文章标题：</label>
          <input id='add-title' type='text' onChange={v => this.handleChange('title', v)} />
        </p>
        <p>
          <label htmlFor='add-author'> 作 者 ：</label>
          <input id='add-author' type='text' onChange={v => this.handleChange('author', v)} />
        </p>
        <p>
          <label htmlFor='add-type'>文章分类：</label>
          <input id='add-type' type='text' onChange={v => this.handleChange('type', v)} />
        </p>
        <p>
          <label htmlFor='add-tags'>文章标签：</label>
          <input id='add-tags' type='text' onChange={v => this.handleChange('tags', v)} />
        </p>
        <p>
          <label htmlFor='add-summary'>文章简介：</label>
          <textarea id='add-summary' rows='5' cols='50' onChange={v => this.handleChange('summary', v)} />
        </p>
        <p>
          <label htmlFor='add-content'>文章内容：</label>
          <textarea id='add-content' rows='20' cols='50' onChange={v => this.handleChange('content', v)} />
        </p>
        <p>
          <button onClick={this.handleSubmit}>新增</button>
        </p>
      </div>
    )
  }
}

export default Add
