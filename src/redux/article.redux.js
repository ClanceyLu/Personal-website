import axios from 'axios'

const ARTICLE_LIST = 'ARTICLE_LIST'

const initState = {
  tags: ['JavaScript', 'React', 'Html', 'CSS', 'Vue', '电影', '音乐', '动漫'],
  articles: []
}

export function article(state = initState, action) {
  switch (action.type) {
    case ARTICLE_LIST:
      return {...state, articles: [...state.articles, ...action.payload]}
    default:
      return state
  }
}

function articleList(data) {
  return {type: ARTICLE_LIST, payload: data}
}

export function getArticle() {
  return dispatch => {
    axios.get('/article/list')
      .then(res => {
        console.log(res.data);
        dispatch(articleList(res.data))
      })
  }
}
