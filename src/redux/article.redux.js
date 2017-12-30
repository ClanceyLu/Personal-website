import axios from 'axios'
// 获取文章
const ARTICLE_LIST = 'ARTICLE_LIST'
// 获取文章内容
const ARTICLE_CONTENT = 'ARTICLE_CONTENT'

const initState = {
  tags: ['JavaScript', 'React', 'Html', 'CSS', 'Vue', '电影', '音乐', '动漫'],
  articles: [],
  thisArticle: {}
}

export function article(state = initState, action) {
  switch (action.type) {
    case ARTICLE_LIST:
      return {...state, articles: [...action.payload]}
    case ARTICLE_CONTENT:
      return {...state, thisArticle: action.payload}
    default:
      return state
  }
}

// 获取文章列表
function articleList(data) {
  return {type: ARTICLE_LIST, payload: data}
}
// 获取文章内容
function articleContent(data) {
  return {type: ARTICLE_CONTENT, payload: data}
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

export function getArticleContent(article_id) {
  return dispatch => {
    axios.get(`/article/content?article_id=${article_id}`)
      .then(res => {
        dispatch(articleContent(res.data.data))
      })
  }
}
