import React, { Component } from 'react'
import './App.css'
import Banner from '../Banner/Banner'
import Goods from '../Goods/Goods'
import List from '../List/List'
import imgSrc from '../Goods/images/1.jpg'
import imgSrc1 from '../Goods/images/2.jpg'
import imgSrc2 from '../Goods/images/3.jpg'

class App extends Component {
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
  render() {
    return (
      <div className="app">
        <Banner />
        <Goods goods={ this.state } buy={ this.handleBuy }/>
        <List goods={this.state} buy={ this.handleBuy} click={ this.handleClick }/>
      </div>
    )
  }
}

export default App
