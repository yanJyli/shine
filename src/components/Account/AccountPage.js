import React, { Component } from 'react';


import AccountNav from './AccountNav';
import MyProducts from './MyProducts';
import MyBasket from './MyBasket';
export default class AccountPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            addProducts: false,
            addBasket: false,
            addStart: true,
        }
    }
    
    handleClickProducts = () => {
        this.setState({
            addProducts: true,
            addBasket: false,
            addStart: false
        })
    }

    handleClickBasket = () => {
        this.setState({
            addBasket: true,
            addProducts: false,
            addStart: false
        })
    }
    
    render() {        
        const {favoritesClothes, oderClothes} = this.props;
        return <>
            <div className='bg-white max-w-screen-lg flex mx-auto '>
                <AccountNav onClickProducts={this.handleClickProducts} onClickBasket={this.handleClickBasket}/>
                {this.state.addStart && <div className=' w-full text-center text-xl m-4'>Добро пожаловать в личный кабинет!</div>}
                {this.state.addProducts && <MyProducts favoritesClothes={favoritesClothes}/>}
                {this.state.addBasket && <MyBasket oderClothes={oderClothes}/>}
            </div>
        </>
    }
}
