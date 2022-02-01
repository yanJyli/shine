import React, { Component } from 'react';
import { signOut } from "firebase/auth";
import {auth} from '../../firebase';
import PropTypes from 'prop-types';
export default class AccountNav extends Component {
    render() {
        const { onClickProducts, onClickBasket} = this.props;
        return (
            <div className='border p-4 w-min text-xl'>                        
                <button onClick={onClickProducts} className='text-left w-fit cursor-pointer hover:bg-amber-50 p-2'>Избранные</button>
                <button onClick={onClickBasket} className='text-left w-fit cursor-pointer hover:bg-amber-50 p-2'>Корзина</button>
                <button onClick={() => signOut(auth)} className='text-left w-fit cursor-pointer hover:bg-amber-50 p-2'>Выйти</button>
            </div>
        )
    }
}

AccountNav.propTypes = {
    onClickProducts: PropTypes.func.isRequired,
    onClickBasket: PropTypes.func.isRequired,
}