import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Heder extends Component {

    render() {
        return (
            <>               
                <div className='bg-amber-100 h-16 text-center '>
                    <p className='text-3xl font-mono pt-3 '>SHINE</p>
                </div>
                
                <div className='bg-amber-50 opacity-80 max-w-screen-lg grid mx-auto border border-white-300 '>
                    <ul className='list-none text-center text-2xl m-2 '>
                        <li className='cursor-pointer hover:bg-amber-100 inline-block mr-10 '>
                            <Link to="/">Главная</Link>
                        </li>
                        <li className='cursor-pointer hover:bg-amber-100 inline-block mr-10 '>
                            <Link to="/collections">Коллекции</Link>
                        </li>
                        <li className='cursor-pointer hover:bg-amber-100 inline-block mr-10 '>
                            <Link to="/reg">Личный кабинет</Link>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}