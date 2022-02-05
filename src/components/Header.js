import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Heder extends Component {
    render() {
        return (
            <>               
                <div className="bg-amber-100 h-16 text-center">
                    <p className="text-2xl sm:text-3xl pt-3">- SHINE -</p>
                </div>
                
                <div className="bg-amber-50 opacity-80 max-w-screen-lg grid mx-auto border border-white-300">
                    <ul className="list-none text-center text-lg sm:text-[22px] m-2">
                        <li className="cursor-pointer hover:bg-amber-100 inline-block sm:mr-10 mr-2 px-2">
                            <Link to="/">Главная</Link>
                        </li>
                        <li className="cursor-pointer hover:bg-amber-100 inline-block sm:mr-8 mr-2 px-2'">
                            <Link to="/collections">Коллекции</Link>
                        </li>
                        <li className="cursor-pointer hover:bg-amber-100 inline-block  px-2">
                            <Link to="/account">Личный кабинет</Link>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}