/**
 * 格式化日期格式
 */
Date.prototype.Format = function () {
  return `${this.getFullYear()}/${this.getMonth() + 1}/${this.getDate()}`
}

/**
 * getCookie 获取Cookie
 * @param {string} cookie名称
 * @return {string} cookie值
 */
export function getCookie(cookie) {
  // 获取cookie并分割成单个
  const cookies = document.cookie.split(';')
  // 获取指定的cookie
  const reg = new RegExp('^\\' + cookie + '=')
  const cv = cookies.find((v) => {
    return v.trim().match(reg) ? 1 : 0
  })
  // 返回cookie值或者null
  return cv ? cv.trim().slice(cookie.length + 1) : null
}
