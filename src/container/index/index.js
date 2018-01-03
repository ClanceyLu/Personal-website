import React from 'react'
import { connect } from 'react-redux'

import Content from '../../component/content/content'

import style from './index.less'
/**
 * 首页
 */
class Index extends React.Component {
  render() {
    return (
      <Content type='all' />
    )
  }
}

export default Index
