import React, { Component } from 'react';

import Header from '../Header';
import FormLogin from './form/FormLogin';
import FormReg from './form/FormReg';
import Footer from '../Footer';

export default class AccountPageForm extends Component {
    render() {
        return (
            <>
                <Header />
                
                    <div className='bg-white opacity-90 max-w-screen-lg grid mx-auto text-center '>
                        <p className='text-[20px] m-4 font-semibold'>Вход</p>
                        <FormLogin />
                    </div>

                    <div className='bg-white opacity-90 max-w-screen-lg grid mx-auto text-center '>
                        <p className='text-[20px] m-4 font-semibold'>Регистрация</p>
                        <FormReg />
                    </div>
                
                
                <Footer />
            </>
        )
    }
}
