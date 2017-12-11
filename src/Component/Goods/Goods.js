import React,{ Component } from 'react'
import './goods.css'
// import imgSrc from './images/1.jpg'
// import imgSrc1 from './images/2.jpg'
// import imgSrc2 from './images/3.jpg'

class Goods extends Component {
  render () {
    let { goods ,buy} = this.props
    let buys = goods.goods.map( (item ) => {
          return <div key= { item.id }>
            <img src={ item.image } alt="1"/>
            <button onClick={ () =>buy(item.id,item) } disabled={ item.show ? '' : 'disabled'}>{ item.show ? '购买' : '已购' }</button></div>
        })
   return (
     <div className="goods">
       <div className="good-buy">
         { buys }
       </div>
     </div>
   )
  }
}

export default Goods
