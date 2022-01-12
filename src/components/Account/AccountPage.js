import React, { Component } from 'react';

import Header from '../Header';

import Footer from '../Footer';

export default class AccountPage extends Component {
    constructor() {
        super();

        this.state = {
        accountList: ['Мои товары', 'Корзина', 'Выход']}
    }
    render() {
        const { accountList } = this.state;

        const accountListPage = accountList.map((item) => {return <li key={item} className='cursor-pointer pr-10 hover:bg-amber-50'>{item}</li>})
        return (
            <>
                <Header />
                <div className='bg-white opacity-90 max-w-screen-lg grid mx-auto'>
                    <ul className='list-none text-left text-xl m-2 w-fit'>
                        {accountListPage}
                    </ul>
                </div>
                <Footer />
            </>
        )
    }
}
