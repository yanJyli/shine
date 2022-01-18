import React, { Component } from 'react';
import { signOut } from "firebase/auth";
import {auth} from '../../firebase';

export default class AccountPage extends Component {
    render() {
        return <>
                    <div className='bg-white opacity-90 max-w-screen-lg grid mx-auto'>
                        <button className='cursor-pointer hover:bg-amber-10 0text-left text-xl m-2 w-fit inline-block mr-10'> Мои товары </button>
                        <button className='cursor-pointer hover:bg-amber-10 0text-left text-xl m-2 w-fit inline-block mr-10'>Корзина</button>
                        <button onClick={() => signOut(auth)} className='cursor-pointer hover:bg-amber-10 0text-left text-xl m-2 w-fit inline-block mr-10'>Выйти</button>
                    </div>
        </>
    }
}
