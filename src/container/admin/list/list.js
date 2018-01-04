import React from 'react'
import { connect } from 'react-redux'

import '../../../util'
import { getArticleList } from '../../../redux/admin.redux'

import style from './list.less'
@connect(
  state => state.admin,
  {getArticleList}
)
class List extends React.Component {
  componentDidMount() {
    this.props.getArticleList()
  }
  render() {
    return(
      <div className={style.list}>
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
              <tr>
                <td>{i}</td>
                <td>{v.title}</td>
                <td>{v.author}</td>
                <td>{v.type}</td>
                <td>{v.tags}</td>
                <td>{ new Date(v.create_time).Format()}</td>
                <td>
                  <button>删除</button>
                  <button>编辑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default List