import axios from 'axios'

const LOGIN_SUC = 'LOGIN_SUC'

const initState = {
  user: {}
}

export function admin(state = initState, action) {
  switch (action.type) {
    case LOGIN_SUC:
      return {...state, user: action.payload}
    default:
      return state
  }
}

function loginSuccess(data) {
  return {type: LOGIN_SUC, payload: data}
}


export function login({userid, pwd}) {
  return dispatch => {
    axios.post('/admin/login', {userid, pwd})
      .then(res => {
        if (res.status === 200 && res.data.code === 1) {
          console.log(res.data.data);
          dispatch(loginSuccess(res.data.data))
        }
      })
  }
}
