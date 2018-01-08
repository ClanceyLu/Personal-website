import React from 'react'
import { connect } from 'react-redux'

import BreadCrumb from '../../../component/breadcrumb/breadcrumb'
import Modal from '../../../component/modal/modal'
import '../../../util'
import { getArticleList, deleteAticle } from '../../../redux/admin.redux'

import style from './list.less'
@connect(
  state => state.admin,
  {getArticleList, deleteAticle}
)
class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      crumbs: [
        {
          title: '文章编辑',
          href: '/admin'
        },
        {
          title: '文章列表',
          href: '/admin/list'
        }
      ],
      del_id: '',
      show: false
    }
  }
  componentDidMount() {
    this.props.getArticleList()
  }
  delArticle(article_id) {
    this.setState({
      show: !this.state.show,
      del_id: article_id
    })
  }
  test(a) {
    console.log(a)
  }
  render() {
    return(
      <div className={style.list}>
        <BreadCrumb crumbs={this.state.crumbs} />
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>文章标题</th>
              <th>作者</th>
              <th>分类</th>
              <th>标签</th>
              <th>时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {this.props.article.map((v, i) => (
              <tr key={i}>
                <td>{i}</td>
                <td>{v.title}</td>
                <td>{v.author}</td>
                <td>{v.type}</td>
                <td>{v.tags}</td>
                <td>{ new Date(v.create_time).Format()}</td>
                <td>
                  <button onClick={() => this.props.history.push(`/admin/edit/${v._id}`)}>编辑</button>
                  <button className={style.del} onClick={() => this.delArticle(v._id)}>删除</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal
          show={this.state.show}
          cencle={() => this.setState({show: false})}
          confirm={() => this.props.deleteAticle(this.state.del_id)}
        />
      </div>
    )
  }
}

export default List
