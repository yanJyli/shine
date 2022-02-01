import React, { Component } from 'react';

import FormLogin from './FormLogin';
import FormSingUp from './FormSingUp'; 

export default class Forms extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            addFormLogin: true,
            addFormSingUp: false
        }
    }

    addSingUp = () => {
        this.setState({
            addFormLogin: false,
            addFormSingUp: true
        })
    } 

    addLogin = () => {
        this.setState({
            addFormLogin: true,
            addFormSingUp: false
        })
    } 

    render() {
        return (
            <div className='bg-white max-w-screen-lg  mx-auto text-center p-4'>
                <button onClick={this.addLogin} className='text-[20px] border px-4 py-2'>Вход</button>
                <button onClick={this.addSingUp}  className='text-[20px] border px-4 py-2'>Регистрация</button>
                {this.state.addFormLogin && <FormLogin />}
                {this.state.addFormSingUp && <FormSingUp />}
            </div> 
        )
    }
}
