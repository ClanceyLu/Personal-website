import React from 'react'

import Header from '../../component/header/header'
import Footer from '../../component/footer/footer'
import Article from '../../component/article/article'
import Painal from '../../component/painal/painal'
class Index extends React.Component {
  render() {
    return (
      <div className='flex'>
        <Header />
        <div id='content'>
          <main>
            <Article title='齐物论' author='南华真人' />
          </main>
          <aside>
            <Painal />
          </aside>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Index
