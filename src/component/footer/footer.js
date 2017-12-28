import React from 'react'

import style from './footer.less'
/**
 * 页脚
 */
class Footer extends React.Component {
  render() {
    return (
      <footer className={style.footer}>
    		<div className={style.con}>
    			<p>2017 &copy; ClanceyLu</p>
    		</div>
    	</footer>
    )
  }
}

export default Footer
