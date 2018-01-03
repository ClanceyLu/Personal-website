import React from 'react'
import { Redirect } from 'react-router-dom'

import ArticleForm from '../../../component/article-form/article-form'
class Add extends React.Component {
  render() {
    return (
      <div>
        <ArticleForm />
      </div>
    )
  }
}

export default Add
