import axios from 'axios'

const LOGIN_SUC = 'LOGIN_SUC'
const ADD_SUCCESS = 'ADD_SUCCESS'
const ARTICLE_LIST = 'ARTICLE_LIST'
const DELETE_ARTICLE = 'DELETEARTICLE'

const initState = {
  user: {},
  article: []
}

export function admin(state = initState, action) {
  switch (action.type) {
    case LOGIN_SUC:
      return {...state, user: action.payload}
    case ADD_SUCCESS:
      return {...state}
    case ARTICLE_LIST:
      return {...state, article: action.payload}
    case DELETE_ARTICLE:
      const del = state.article.find((v) => v._id === action.payload)
      const newArticle = state.article.splice(state.article.indexOf(del), 1)
      return {...state, ...newArticle}
    default:
      return state
  }
}

function loginSuccess(data) {
  return {type: LOGIN_SUC, payload: data}
}

function addSuccess() {
  return {type: ADD_SUCCESS}
}

function getListSuccess(data) {
  return {type: ARTICLE_LIST, payload: data}
}

function delArticleSuccess(id) {
  return {type: DELETE_ARTICLE, payload: id}
}


export function login({userid, pwd}) {
  return dispatch => {
    axios.post('/admin/login', {userid, pwd})
      .then(res => {
        if (res.status === 200 && res.data.code === 1) {
          dispatch(loginSuccess(res.data.data))

        }
      })
  }
}

export function addArticle({title, author, type, tags, summary, content}) {
  return dispatch => {
    axios.post('/admin/add', {title, author, type, tags, summary, content})
      .then(res => {
        if (res.status === 200 && res.data.code === 1) {
          dispatch(addSuccess())
        }
      })
  }
}

export function getArticleList() {
  return dispatch => {
    axios.get('/admin/articlelist')
      .then(res => {
        if (res.status === 200 && res.data.code === 1) {
          dispatch(getListSuccess(res.data.data))
        }
      })
  }
}

export function deleteAticle(id) {
  return dispatch => {
    axios.get(`/admin/delarticle?article_id=${id}`)
      .then(res => {
        if (res.status === 200 && res.data.code === 1) {
          dispatch(delArticleSuccess(id))
        }
      })
  }
}
