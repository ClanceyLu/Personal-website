import React from 'react'

import Info from '../../component/info/info'
import Tag from '../../component/tag/tag'
import Breadcrumb from '../../component/breadcrumb/breadcrumb'
import style from './readmore.less'
/**
 * 阅读文章
 * @param {object} article 文章
 * @param {string} article.title 文章标题
 * @param {string} article.author 文章作者
 * @param {string} article.main 文章内容
 */
class Readmore extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props);
    this.state = {
      tags: ['JavaScript', 'React', 'Redux', 'CSS', '电影', 'aa', 'ssssssssssssss', 'b'],
      crumbs: [
        {title: '品味生活', href: 'life'},
        {title: '齐物论', href: 'life'},
      ]
    }
  }
  render() {
    return (
      <div className={style.readmore}>
        <div className={style.content}>
          <main>
            <Breadcrumb crumbs={this.state.crumbs} />
            {/* <p>{this.props.match.params.article_id}</p> */}
            <h2>齐物论</h2>
            <p className={style.article_info}>
              <span>作者：</span>
              <a href="javascript:;">庄子</a>
              <span className={style.point}>·</span>
              <time>2017/12/12</time>
            </p>
            <section>
              <p>南郭子綦隐机而坐，仰天而嘘，荅焉似丧其耦。颜成子游立侍乎前，曰：“何居乎？形固可使如槁木，而心固可使如死灰乎？今之隐机者，非昔之隐机者也？”子綦曰：“偃，不亦善乎而问之也！今者吾丧我，汝知之乎？女闻人籁而未闻地籁，女闻地籁而不闻天籁夫！”</p>
              <p>子游曰：“敢问其方。”子綦曰：“夫大块噫气，其名为风。是唯无作，作则万窍怒呺。而独不闻之翏翏乎？山林之畏隹，大木百围之窍穴，似鼻，似口，似耳，似枅，似圈，似臼，似洼者，似污者。激者、謞者、叱者、吸者、叫者、譹者、宎者，咬者，前者唱于而随者唱喁，泠风则小和，飘风则大和，厉风济则众窍为虚。而独不见之调调之刁刁乎？”</p>
              <p>子游曰：“地籁则众窍是已，人籁则比竹是已，敢问天籁。”子綦曰：“夫天籁者，吹万不同，而使其自己也。咸其自取，怒者其谁邪？”</p>
              <p>大知闲闲，小知间间。大言炎炎，小言詹詹。其寐也魂交，其觉也形开。与接为构，日以心斗。缦者、窖者、密者。小恐惴惴，大恐缦缦。其发若机栝，其司是非之谓也；其留如诅盟，其守胜之谓也；其杀如秋冬，以言其日消也；其溺之所为之，不可使复之也；其厌也如缄，以言其老洫也；近死之心，莫使复阳也。喜怒哀乐，虑叹变蜇，姚佚启态。乐出虚，蒸成菌。</p>
              <p>日夜相代乎前而莫知其所萌。已乎，已乎！旦暮得此，其所由以生乎！非彼无我，非我无所取。是亦近矣，而不知其所为使。若有真宰，而特不得其朕。可行己信，而不见其形，有情而无形。</p>
              <p>....</p>
            </section>
          </main>
          <aside>
            <Info />
            <Tag tags={this.state.tags} />
          </aside>
        </div>
      </div>
    )
  }
}

export default Readmore
