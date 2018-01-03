import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

import { getCookie } from './util'

import style from './admin.less'

import Accordion from './component/accordion/accordion'
import Add from './container/admin/add/add'

class Admin extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    if (!getCookie('userid')) {
      this.props.history.push('/admin/login')
    }
  }
  render() {
    return (
      <div className={style.admin}>
        <aside>
          <Accordion />
        </aside>
        <main>
          <Switch>
            <Route path='/admin/add' component={Add} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default Admin
