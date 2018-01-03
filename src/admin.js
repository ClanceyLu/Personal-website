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
import Login from './container/admin/login/login'

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
          {/* {this.state.userid ? null : this.props.history.push('/admin/login')} */}
          <aside>
            <Accordion />
          </aside>
          <main>
            <Switch>
              <Route path='/admin/add' component={Add} />
              <Route path='/admin/login' component={Login} />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}

export default Admin
