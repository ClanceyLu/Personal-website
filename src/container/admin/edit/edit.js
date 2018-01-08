import React from 'react'
import axios from 'axios'

import BreadCrumb from '../../../component/breadcrumb/breadcrumb'
import ArticleForm from '../../../component/article-form/article-form'

class Edit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      crumbs: [
        {
          title: '文章编辑',
          href: '/admin'
        },
        {
          title: '编辑文章',
          href: '/admin/edit'
        }
      ]
    }
  }
  componentDidMount() {

  }
  render() {
    const article_id = this.props.match.params.article_id
    return (
      <div>
        <BreadCrumb crumbs={this.state.crumbs} />
        <ArticleForm article_id={article_id} />
      </div>
    )
  }
}

export default Edit
