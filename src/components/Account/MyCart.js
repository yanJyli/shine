import React, { Component } from 'react';
import CartModalPage from './CartModalPage';

export default class MyCart extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        addModalPage: false,        
        showcartClothes: true, 
    }
}

  handleModalPage = () => {
    this.setState({
        addModalPage: !this.state.addModalPage,
        showcartClothes: !this.state.showcartClothes
    })
}
  onClose = () => {
    this.setState({
        addModalPage: !this.state.addModalPage,        
        showcartClothes: this.state.showcartClothes
    })
  }
  render() {
    const {cartClothes} = this.props;    
    const { showcartClothes, addModalPage } = this.state;
    return (
        <div className='grid w-full border p-4'>
            <p className='text-center text-sm sm:text-lg'>Моя корзина</p>
            <div className='grid place-items-center'>

            {showcartClothes && (<div className='w-full'>
            {cartClothes.map((i) => (
              <div className='w-min flex sm:m-4 my-2'>                
                <input type="checkbox" className='text-center sm:m-4 m-2'/>
                <img src={`${process.env.PUBLIC_URL}/${i.src}`} alt='img' className='sm:mr-4 mr-2 sm:w-full w-2/3'/>
                  <div className='p-2 text-sm sm:text-lg'>
                  <p className='w-full '>{`${i.titleToOne}, ${i.price}`}</p>
                  <p className='w-full'>{`${i.size} размер`}</p>
                  </div>
              </div>
            ))}
            </div>)}
            
            {!cartClothes ? null : (
              <div className='grid place-items-center'> 
                <button onClick={this.handleModalPage} className='w-fit hover:bg-amber-50 p-2'>Оформить заказ</button>
                {addModalPage  && <CartModalPage onClose={this.onClose}/> }
              </div>
              )}              
            </div>
        </div>    
    )
  }
}
