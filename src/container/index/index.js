import React from 'react'

import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import Article from '../../component/article/article'
import Info from '../../component/info/info'
import style from './index.less'
class Index extends React.Component {
  render() {
    return (
      <div className={style.flex}>
        <Header />
        <div className={style.content}>
          <main>
            <Article title='齐物论' author='南华真人' />
          </main>
          <aside>
            <Info />
          </aside>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Index
