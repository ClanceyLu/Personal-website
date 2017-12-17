import React, { Component } from 'react'
import style from './App.less'
import Index from './container/index/index'

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <Index />
      </div>
    )
  }
}

export default App
