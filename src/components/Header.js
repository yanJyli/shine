import React, { Component } from 'react'

export default class Heder extends Component {
    constructor() {
        super();

        this.state = {
        arrList: ['Главная', 'Коллекции', 'Личный кабинет']}
    }

    render() {

        const { arrList } = this.state;

        const listNav = arrList.map((item) => {return <li key={item} className='cursor-pointer hover:bg-amber-100 inline-block mr-10 '>{item}</li>})
        
        return (
            <>
                <div className='bg-amber-100 h-16 text-center '>
                    <p className='text-3xl font-mono pt-3 '>SHINE</p>
                </div>
                
                <div className='bg-amber-50 opacity-80 max-w-screen-lg grid mx-auto border border-white-300 '>
                    <ul className='list-none text-center text-2xl m-2 '>
                        {listNav}
                    </ul>
                </div>
            </>
        )
    }
}