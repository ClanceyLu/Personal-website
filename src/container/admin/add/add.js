import React from 'react'

import BreadCrumb from '../../../component/breadcrumb/breadcrumb'
import ArticleForm from '../../../component/article-form/article-form'

class Add extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      crumbs: [
        {
          title: '文章编辑',
          href: '/admin'
        },
        {
          title: '添加文章',
          href: '/admin/add'
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <BreadCrumb crumbs={this.state.crumbs} />
        <ArticleForm />
      </div>
    )
  }
}

export default Add
