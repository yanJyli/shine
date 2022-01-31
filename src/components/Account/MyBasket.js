import React, { Component } from 'react';
import AccountModalPage from './AccountModalPage';

export default class MyBasket extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        addModalPage: false,
    }
}

  handleModalPage = () => {
    this.setState({
        addModalPage: !this.state.addModalPage,
    })
}
  onClose = () => {
    this.setState({
        addModalPage: !this.state.addModalPage,
    })
  }
  render() {
    const {oderClothes} = this.props;
    return <>
        <div className='grid w-full border p-4'>
            <p className='text-center text-lg'>Моя корзина</p>
            <div className='grid place-items-center'>
            {oderClothes}
              <button onClick={this.handleModalPage} className='w-fit hover:bg-amber-50 p-2'>Оформить заказ</button>
              {this.state.addModalPage && <AccountModalPage onClose={this.onClose}/>}
            </div>
        </div>    
    </>
  }
}
