import React, { Component } from 'react';
import AccountModalPage from './AccountModalPage';

export default class MyBasket extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        addModalPage: false,        
        showoderClothes: true, 
    }
}

  handleModalPage = () => {
    this.setState({
        addModalPage: !this.state.addModalPage,
        showoderClothes: !this.state.showoderClothes
    })
}
  onClose = () => {
    this.setState({
        addModalPage: !this.state.addModalPage,        
        showoderClothes: this.state.showoderClothes
    })
  }
  render() {
    const {oderClothes} = this.props;
    return (
        <div className='grid w-full border p-4'>
            <p className='text-center text-lg'>Моя корзина</p>
            <div className='grid place-items-center'>

            {this.state.showoderClothes && (<div className='w-full'>
            {oderClothes.map((i) => (
              <div className='w-min flex m-4'>                
                <input type="checkbox" className='text-center m-4'/>
                <img src={`${process.env.PUBLIC_URL}/${i.src}`} alt='img' className=' mr-4 '/>
                  <div className='m-2 p-2'>
                  <p className='w-full '>{`${i.titleToOne}, ${i.price}`}</p>
                  <p className='w-full'>{`${i.size} размер`}</p>
                  </div>
              </div>
            ))}
            </div>)}
            
            {!oderClothes ? null : (
              <div className='grid place-items-center'> 
                <button onClick={this.handleModalPage} className='w-fit hover:bg-amber-50 p-2'>Оформить заказ</button>
                {this.state.addModalPage  && <AccountModalPage onClose={this.onClose}/> }
              </div>
              )}              
            </div>
        </div>    
    )
  }
}
