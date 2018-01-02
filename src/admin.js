import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import { getCookie } from './util'

import style from './admin.less'

import Accordion from './component/accordion/accordion'

class Admin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userid: getCookie('userid')
    }
  }
  render() {
    return (
      <Router>
        <div className={style.admin}>
          {this.state.userid ? null : this.props.history.push('/admin/login')}
          <aside>
            <Accordion />
          </aside>
          <main>
            mian
          </main>
        </div>
      </Router>
    )
  }
}

export default Admin
