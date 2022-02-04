import React, { Component } from 'react';
import PropTypes from 'prop-types';

import favoritesCollection from '../../services/favorites-services';
import cartCollection from '../../services/cart-services';

import tableImg from '../img/sizes_women.jpg';
export default class ProductModalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTable: false,
            showAnswerToFavorites: false,
            showAnswerToCart: false,
            size: [{ id: 40 }, { id: 42 }, { id: 44 }, { id: 46 }, { id: 48 }],
            sizeId: null
        }
    }

    handleShowTable = () => {
        this.setState({
            showTable: !this.state.showTable,
            addModalPage: !this.state.addModalPage
        })
        
    }

    handleSizeClick = (id) => {
        this.setState({
            sizeId: id   
        })
    } 

    handleCloseTable = () => {
        this.setState({
            showTable: !this.state.showTable    
        })
    }

    handleMooveToFavorites = () => {
        const {item, imgRefSrc, currentUser} = this.props;
        favoritesCollection.createDocument({
            username: currentUser.displayName,
            src: imgRefSrc,
            titleToOne: item.titleToOne,
            price: item.price,
            size: this.state.sizeId
        })  
        this.setState({
            showAnswerToFavorites: !this.state.showAnswerToFavorites    
        })
    }    

    handleMoveToCart = () => {
        const {item, imgRefSrc, currentUser} = this.props;
        cartCollection.createDocument({
            username: currentUser.displayName,
            src: imgRefSrc,
            titleToOne: item.titleToOne,
            price: item.price,
            size: this.state.sizeId
        })
        this.setState({
            showAnswerToCart: !this.state.showAnswerToCart    
        })
    }

    render() {
        const {item, imgRefSrc, onClose} = this.props;
        const {size, showTable, showAnswerToFavorites, showAnswerToCart} = this.state;
        return (            
            <div className='bg-gray-400/50 w-full h-full fixed top-0 left-0 flex items-center justify-center' >
                <div className='bg-white flex w-3/4 '>
                    <img src={imgRefSrc} alt='img' className='w-1/3 mr-4'/>
                    <div className='w-fit '>
                        <p className='m-2 text-lg'>{`${item.titleToOne}, ${item.price}`}</p>
                        <p className='m-2'>{item.caption}</p>
                        <div className='m-2 '>
                            <p className='mb-2'>Выберете размер:</p>
                            <div className=''>                                
                                <button onClick={this.handleShowTable} className='mr-2 border px-2 hover:bg-amber-50'>Показать таблицу</button>  
                                {size.map((i) => (                                  
                                    <button onClick={() => this.handleSizeClick(i.id)} className='border px-2 hover:bg-amber-50'>{i.id}</button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <button onClick={this.handleMoveToCart} className='m-2 border rounded px-2 hover:bg-amber-50'>Добавить в корзину</button>
                            <button onClick={this.handleMooveToFavorites} className='m-2 border rounded px-2 hover:bg-amber-50'>Добавить в избранные товары</button>
                            <button onClick={onClose} className=' m-2 border rounded px-2 hover:bg-gray-300'>Закрыть</button>
                        </div>
                        {showTable && <img src={tableImg} alt='img' onClick={this.handleCloseTable} className='w-1/2 my-2 mx-4'/> }
                        {showAnswerToFavorites && <p className='m-2'>Товар добавлен в избранные</p> }
                        {showAnswerToCart && <p className='m-2'>Товар добавлен в корзину</p> }
                    </div>
                </div>
            </div>
        )
    }
}

ProductModalPage.propTypes = {
    onClose: PropTypes.func.isRequired,
}