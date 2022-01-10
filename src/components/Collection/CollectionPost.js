import React, { Component } from 'react';
import Actions from './Actions';

export default class CollectionPost extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            collection: 
            [
                {
                    title: "Спортивная одежда",
                    caption: "Коллекция спортивной одежды",
                    img: ['../img/collection/sport/1.jpg', 
                        '../img/collection/sport/2.jpg',
                        '../img/collection/sport/3.jpg'],
                    likes: 1,
                    comments:[],
                },
                {
                    title: "Платья",
                    caption: "Коллекция стильных платьев",
                    img: ['../img/collection/dress/1.jpg',
                    '../img/collection/dress/2.jpg',
                    '../img/collection/dress/3.jpg',
                    '../img/collection/dress/4.jpg',                
                    ],
                    likes: 1,
                    comments:[],
                },
                {
                    title: "Костюмы",
                    caption: "Коллекция стильных костюмов",
                    img: ['../img/collection/suit/1.jpg',
                    '../img/collection/suit/2.jpg',
                    '../img/collection/suit/3.jpg',                
                    ],
                    likes: 1,
                    comments:[],
                },
            ]
        }
    }

    render() {
        const {collection} = this.state;
        return (
            <div className='bg-white opacity-90 max-w-screen-lg grid mx-auto'> { collection.map((item) => (
                <div key={item} className='m-4'>
                    <p className='text-xl'>{item.title}</p>
                    <p className='text-base'>{item.caption}</p>
                    <ul className='list-none grid m-2'>{item.img.map((i) => (
                        <li key={i} className='inline-block'>
                        <img src={i} alt='img' className='cursor-pointer '/>
                        </li>
                    ))}</ul>
                    <Actions likes={item.likes} />
                </div>
                ))}
            </div>
        )
    }
}