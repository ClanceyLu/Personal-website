import React from 'react'

import style from './modal.less'
class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.sure = this.sure.bind(this)
  }
  sure() {
    this.props.cencle()
    this.props.confirm()
  }
  render() {
    return (
      <div className={this.props.show ? '' : style.hidden}>
        <div className={style.dialog}>
          <div className={style.header}>
            <h3>Modal</h3>
          </div>
          <div className={style.content}>
            <p>确认删除？</p>
          </div>
          <div className={style.footer}>
            <button onClick={this.sure}>删除</button>
            <button onClick={this.props.cencle}>取消</button>
          </div>
        </div>
        <div className={style.dialog_shadow}></div>
      </div>
    )
  }
}

export default Modal
