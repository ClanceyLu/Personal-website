import React from 'react'

import style from './info.less'

import avatar from '../../static/img/avatar.jpg'
/**
 * 博主信息
 */
class Info extends React.Component {
  render() {
    return (
      <div className={style.info}>
        <h2>HELLO</h2>
				<div>
					<figure>
						<img src={avatar} alt="avatar" />
						<figcaption>Clancey Lu</figcaption>
					</figure>
					<p>Hello, Welcome to Clancey's world!</p>
					<p>彼出于是，是亦因彼</p>
				</div>
      </div>
    )
  }
}

export default Info
