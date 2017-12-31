import { combineReducers } from 'redux'
import { article } from './redux/article.redux'
import { admin } from './redux/admin.redux'
export default combineReducers({article, admin})
