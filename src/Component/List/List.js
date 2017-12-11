import React,{ Component } from 'react'
import './list.css'

class List extends Component {
  render () {
    let { goods, click,buy} = this.props
    let total = 0
    let payment = goods.newArr.map((item,i) => {
      total = total + item.num * item.Price
      return <div className="list-each" key={ i }>
           <img src={ item.image } alt="2"/>
           <div><span>{ item.username}</span><span>{`￥${ item.Price} 元`}</span></div>
           <div>
             <button onClick={ () => click(-1,item.id)}>-</button>
             <span>{ item.num }</span>
             <button onClick={ () => click(1,item.id)}>+</button>
           </div>
           <button onClick={ () => buy(item.id,item)}>删除</button>
         </div>
       })
   return (
     <div className="list">
          <div className="list-title">
              { total !==0 ? `${total} 元` : '请添加物品到购物车' }
          </div>
          <div className="list-down">
            { payment}
          </div>
     </div>
   )
  }
}

export default List
