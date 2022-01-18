import React, { Component } from 'react';

import FormLogin from './FormLogin';
import FormSingUp from './FormSingUp'; 

export default class Forms extends Component {

    render() {
        return <>
                    <div className='bg-white opacity-90 max-w-screen-lg  mx-auto text-center p-4'>
                        <button className='text-[20px] border px-4 py-2'>Вход</button>
                        <button className='text-[20px] border px-4 py-2'>Регистрация</button>

                        <FormLogin />
                        <FormSingUp />
                    </div> 
            </>
    }
}
