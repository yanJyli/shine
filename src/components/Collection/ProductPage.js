import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Actions from './Actions';
import Footer from '../Footer';

export default class ProductPage extends Component {
    render() {
        const {collection} = this.props;
        return (
            <>
                <Header />

                <img src={collection.item.src} alt='img' className='w-1/3 '/>
                <div>
                    <h1>{collection.item.title}</h1>
                    <p>{collection.item.caption}</p>
                    <Actions likes={collection.item.likes} />
                    <button className=' m-2 border rounded border-gray-300 w-min px-2 hover:bg-amber-50'>Добавить в корзину</button>
                </div>
                
                <Footer />
            </>
        )
    }
}

ProductPage.propTypes = {
    collection: PropTypes.arrayOf(PropTypes.string),
}
