import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AccountNav from './AccountNav';
import MyFavorites from './MyFavorites';
import MyCart from './MyCart';
import MyOrder from './MyOrder';
export default class AccountPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            addProducts: false,
            addCart: false,
            addStart: true,
            addOrder: false
        }
    }
    
    handleClickProducts = () => {
        this.setState({
            addProducts: true,
            addCart: false,
            addStart: false,
            addOrder: false
        })
    }

    handleClickCart = () => {
        this.setState({
            addCart: true,
            addProducts: false,
            addStart: false,
            addOrder: false
        })
    }

    handleClickOrder = () => {
        this.setState({
            addCart: false,
            addProducts: false,
            addStart: false,
            addOrder: true
        })
    }
    
    render() {        
        const { addStart, addProducts, addCart, addOrder} = this.state;
        const {favoritesClothes, cartClothes, currentUser, orderClothes} = this.props;

        return (
            <div className="bg-white max-w-screen-lg flex mx-auto">
                <AccountNav onClickProducts={this.handleClickProducts} onClickCart={this.handleClickCart} onClickOrder={this.handleClickOrder}/>
                {addStart && <div className="w-full text-center text-lg sm:text-xl m-4">Добро пожаловать в личный кабинет, {currentUser.displayName}!</div>}
                {addProducts && <MyFavorites favoritesClothes={favoritesClothes} currentUser={currentUser}/>}
                {addCart && <MyCart cartClothes={cartClothes}/>}
                {addOrder && <MyOrder orderClothes={orderClothes}/>}
            </div>
        )
    }
}

AccountPage.defaultProps = {
    favoritesClothes: null,
    cartClothes: null,
    currentUser: null,
}

AccountPage.propTypes = {

    favoritesClothes: PropTypes.shape({
        username: PropTypes.string,
        src: PropTypes.string,
        titleToOne: PropTypes.string,
        price: PropTypes.string,
        size: PropTypes.string,
    }),
    currentUser: PropTypes.shape({
        username: PropTypes.string,
    })
}