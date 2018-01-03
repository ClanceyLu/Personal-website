import React from 'react'
import { connect } from 'react-redux'

import style from './life.less'

import Content from '../../component/content/content'

class Life extends React.Component {
  render() {
    return (
      <Content type='life' />
    )
  }
}

export default Life
