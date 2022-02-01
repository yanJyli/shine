import React, { Component } from 'react';

import oderCollection from '../../services/oder-services';

export default class MyProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showAnswerToOder: false,
        showfavoritesClothes: true,         
    }
} 

  handleMooveToBasket = () => {
    const {item, imgRefSrc, currentUser} = this.props;

        oderCollection.createDocument({
            username: currentUser.displayName,
            src: imgRefSrc,
            titleToOne: item.titleToOne,
            price: item.price,
            size: this.state.sizeId
        }, )
        
        this.setState({
            showAnswerToOder: !this.state.showAnswerToOder,
            showfavoritesClothes: !this.state.showAnswerToOder,             
        })
  }

  render() {
    const { favoritesClothes } = this.props;
    return (
        <div className='grid border p-4 w-full'>
            <p className='text-center text-lg'>Мои избранные товары</p>

            {this.state.showfavoritesClothes && (<div className='w-full'>
            {favoritesClothes.map((i) => (
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

          {favoritesClothes ? null :(<div className='grid place-items-center'>    
            <button onClick={this.handleMooveToBasket} className='w-fit hover:bg-amber-50 p-2'>Добавить в корзину</button>
              {this.state.showAnswerToOder && <p className='m-2'>Товар добавлен в корзину</p> }
          </div>)}
      </div>
    )
  }
}