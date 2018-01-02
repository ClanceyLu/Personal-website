import React from 'react'

import style from './accordion.less'

class Accordion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      accordionList: [
        {
          title: '文章列表',
          children: [
            '文章分类',
            '文章查询',
          ]
        },
        {
          title: '文章编辑',
          children: [
            '新增文章',
            '文章编辑',
          ]
        },
      ],
      show: ''
    }
    this.show = this.show.bind(this)

  }
  show(t) {
    this.setState({
      show: t
    })
  }
  render() {
    return (
      <div className={style.accordion}>
        <h2 className={style.logo}>Clancey</h2>
        <ul>
          {this.state.accordionList.map((v) => (
            <li key={v.title} className={this.state.show === v.title ? style.hide : null}>
              <div onClick={() => this.show(v.title)}>{v.title}</div>
              <ul>
                {v.children.map(v => <li key={v}>{v}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Accordion
