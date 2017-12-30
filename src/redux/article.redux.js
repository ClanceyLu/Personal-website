import axios from 'axios'
// 获取文章
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

// 获取文章
function articleList(data) {
  return {type: ARTICLE_LIST, payload: data}
}

/**
 * 向后台请求获取文章
 * @param {string} 请求文章分类
 */
export function getArticle(type) {
  return dispatch => {
    axios.get(`/article/list?type=${type}`)
      .then(res => {
        dispatch(articleList(res.data.data))
      })
  }
}
