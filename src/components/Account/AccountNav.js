import React, { Component } from 'react';
import { signOut } from "firebase/auth";
import {auth} from '../../firebase';

export default class AccountNav extends Component {
    render() {
        const { currentUser } = this.props;
        return <>
                    <div className='grid border px-4 py-2 w-fit'>
                        <p className='text-xl m-2'>Здравствуйте, {currentUser}</p>
                        <button className='cursor-pointer hover:bg-amber-10 0text-left text-xl m-2 w-fit inline-block mr-10'>Мои товары</button>
                        <button className='cursor-pointer hover:bg-amber-10 0text-left text-xl m-2 w-fit inline-block mr-10'>Корзина</button>
                        <button className='cursor-pointer hover:bg-amber-10 0text-left text-xl m-2 w-fit inline-block mr-10'>Настройки</button>
                        <button onClick={() => signOut(auth)} className='cursor-pointer hover:bg-amber-10 0text-left text-xl m-2 w-fit inline-block mr-10'>Выйти</button>
                    </div>
        </>
    }
}
