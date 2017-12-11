import React,{ Component } from 'react'
import './banner.css'
import imgSrc from './images/1.jpg'
import imgSrc1 from './images/2.jpg'
import imgSrc2 from './images/3.jpg'
import imgSrc3 from './images/4.jpg'
import imgSrc4 from './images/5.jpg'
import imgSrc5 from './images/next.svg'
import imgSrc6 from './images/prev.svg'

class Banner extends Component {
  state = {
    pics : [
      {
        pic : imgSrc,
        tab : 'tab',
        id : 1
      },{
        pic : imgSrc1,
        tab : 'tab1',
        id : 2
      },{
        pic : imgSrc2,
        tab : 'tab2',
        id : 3
      },{
        pic : imgSrc3,
        tab : 'tab3',
        id : 4
      },{
        pic : imgSrc4,
        tab : 'tab4',
        id : 5
      }
    ],
    show : 0,
  }
  handleClick = (i,e) => {
    e.preventDefault()
    this.setState({
      show : i
    })
  }
  handleRight = () => {
    if(this.state.show < 4){
      this.setState({
        show : this.state.show + 1
      })
    }else{
      this.setState({
        show : 0
      })
    }
  }
  handleLeft = () => {
    if(this.state.show > 0){
      this.setState({
        show : this.state.show - 1
      })
    }else{
      this.setState({
        show : 4
      })
    }
  }
  componentDidMount(){
    this.time = setInterval(() => {
      if(this.state.show < 4){
        this.setState({
          show : this.state.show + 1
        })
      }else{
        this.setState({
          show : 0
        })
      }
  },2000)
}
  loop = () => {
    return setInterval(() => {
      if(this.state.show < 4){
        this.setState({
          show : this.state.show + 1
        })
      }else{
        this.setState({
          show : 0
        })
      }
  },2000)
}
  handleEnter = () => {
    clearInterval(this.time)
  }
  handleLeave = () => {
    this.time = this.loop()
  }
  render () {
    let pic = this.state.pics.map( (item) => {
      return <img src={ item.pic } alt={ item.id } key={ item.id }/>
    })
    let picDown = this.state.pics.map( (item,i) => {
      return <a href="#" key={ item.id } onClick={ (e) => this.handleClick(i,e) }
        className={ `${this.state.show === i && 'active'}`}></a>
    })
    let left = this.state.show * -800
   return (
     <div className="banner">
       <div className="show"onMouseEnter={ this.handleEnter } onMouseLeave={ this.handleLeave }>
        <div className="pic" style={ { marginLeft : left } }>
          { pic }
        </div>
        <div className="pic-down">
           { picDown }
        </div>
        <a href="#"><img src={ imgSrc5 } alt="1" onClick={ this.handleLeft }/></a>
        <a href="#"><img src={ imgSrc6 } alt="1" onClick={ this.handleRight }/></a>
       </div>
     </div>
   )
  }
}

export default Banner
