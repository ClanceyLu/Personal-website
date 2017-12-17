import React from 'react'

import style from './tag.less'
class Tag extends React.Component {
  render() {
    return (
      <div className={style.tag}>
        <h2>Tag</h2>
				<div>
          <ul>
            {this.props.tags.map(v => (
              <li key={v}><a href="javascript:;">{v}</a></li>
            ))}
          </ul>
				</div>
      </div>
    )
  }
}

export default Tag
