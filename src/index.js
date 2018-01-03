import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import Admin from './admin'

import registerServiceWorker from './registerServiceWorker'

import reducers from './reducers'

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div style={{height: '100%'}}>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/admin' component={Admin} />

        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
