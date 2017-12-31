import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'

import Login from './container/admin/login/login'

class Admin extends React.Component {
  render() {
    return (
      <Router>
        <div style={{height: '100%'}}>
          <Route exact component={Login} />
        </div>
      </Router>
    )
  }
}

export default Admin
