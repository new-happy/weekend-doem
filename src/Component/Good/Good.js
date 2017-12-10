
import React,{ Component } from 'react'
import './goods.css'
import imgSrc from './images/1.jpg'
import imgSrc1 from './images/2.jpg'
import imgSrc2 from './images/3.jpg'

class Goods extends Component {
  state = {
    goods : [
      {
        username : 'blackcake',
        Price : 93,
        num : 1,
        image : imgSrc,
        show : true,
        id:1
      },
      {
        username : '抹茶蛋糕',
        Price : 63,
        num : 1,
        image : imgSrc1,
        show : true,
        id:2
      },
      {
        username : 'cake',
        Price : 43,
        num : 1,
        image : imgSrc2,
        show : true,
        id:3
      }
    ],
    newArr : []
  }
  handleBuy = (i,item) => {
    let { goods ,newArr} = this.state
    goods[i-1].show = !goods[i-1].show
    goods[i-1].num = 1
    let ind = newArr.indexOf(item)
    if(ind ===-1){
      newArr.push(item)
    }else{
       newArr.splice(ind,1)
    }
    this.setState({
      goods : goods
    })
  }
  handleClick = (num,i) => {
    let { goods } = this.state
     if(!(goods[i-1].num === 1 && num === -1)){
       goods[i-1].num = goods[i-1].num + num
     }
    this.setState({
      goods : goods
    })
  }
  render () {
    let buys = this.state.goods.map( (item,i) => {
      return <div key= { i }>
        <img src={ item.image } alt="1"/>
        <button onClick={ () => this.handleBuy(item.id,item) } disabled={ item.show ? '' : 'disabled'}>{ item.show ? '购买' : '已购' }</button></div>
    })
   let total = 0
    let payment = this.state.newArr.map((item,i) => {
       total = total + item.num * item.Price
      return <div className="list-each" key={ i }>
        <img src={ item.image } alt="2"/>
        <div><span>{ item.username}</span><span>{`￥${ item.Price} 元`}</span></div>
        <div>
          <button onClick={ () => this.handleClick(-1,item.id)}>-</button>
          <span>{ item.num }</span>
          <button onClick={ () => this.handleClick(1,item.id)}>+</button>
        </div>
        <button onClick={ () => this.handleBuy(item.id,item)}>删除</button>
      </div>
    })
   return (
     <div className="goods">
       <div className="good-buy">
         { buys }
       </div>
       <div className="list">
         <div className="list-title">
             { `${total} 元` }
         </div>
         <div className="list-down">
           { payment}
         </div>
      </div>
     </div>
   )
  }
}

export default Goods
