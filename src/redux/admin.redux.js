import axios from 'axios'

const LOGIN_SUC = 'LOGIN_SUC'
const ADD_SUCCESS = 'ADD_SUCCESS'

const initState = {
  user: {}
}

export function admin(state = initState, action) {
  switch (action.type) {
    case LOGIN_SUC:
      return {...state, user: action.payload}
    case ADD_SUCCESS:
      return {...state}
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
