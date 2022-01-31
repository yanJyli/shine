import React, { Component } from 'react';

import oderCollection from '../../services/oder-services';

export default class MyProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showAnswerToOder: false        
    }
} 

  handleMooveToBasket = () => {
    const {item, imgRefSrc} = this.props;

    oderCollection.createDocument({
        src: imgRefSrc,
        titleToOne: item.titleToOne,
        size: this.state.sizeId
    }, )
    
    this.setState({
        showAnswerToOder: !this.state.showAnswerToOder    
    })
  }

  render() {
    const {favoritesClothes} = this.props;
    return <>
        <div className='grid border p-4 w-full'>
            <p className='text-center text-lg'>Мои избранные товары</p>
            <div className='grid place-items-center'>

            <div>         
              
              {favoritesClothes.map((i) => (
                <label>
                <input type="checkbox" />
                <img src={`${process.env.PUBLIC_URL}/${i.src}`} alt='img' className='w-1/4 mr-4 '/>
                <p className='m-2 text-lg'>{i.titleToOne}</p>
                <p className='m-2'>{`${i.size} размер`}</p>
                </label>
              ))}
              
            </div>

            <button onClick={this.handleMooveToBasket} className='w-fit hover:bg-amber-50 p-2'>Добавить в корзину</button>
              {this.state.showAnswerToOder && <p className='m-2'>Товар добавлен в корзину</p> }
          </div>
      </div>
    </>
  }
}
