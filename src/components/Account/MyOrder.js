import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MyOrder extends Component {
    render() {
        const {orderClothes} = this.props;  
        return (
            <div className="grid w-full border p-4">
                <p className="text-center text-lg">Мои заказы</p>
                <div className="grid place-items-center">
                    <div className="w-full sm:flex sm:place-content-center">
                    {orderClothes.map((i) => (
                        <div key={i.itemId} className="w-min  m-4">
                            <img src={`${process.env.PUBLIC_URL}/${i.src}`} alt="img" className=" mr-4 "/>
                            <div className="m-2 p-2 text-sm sm:text-lg ">
                            <p className="w-full">{`${i.titleToOne}, ${i.price}`}</p>
                            <p className="w-full">{`${i.size} размер`}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>    
        )
    }
}
MyOrder.defaultProps = {
    orderClothes: null,
}

MyOrder.propTypes = {
    orderClothes: PropTypes.arrayOf(PropTypes.shape(
        {itemId: PropTypes.string,
        username: PropTypes.string,
        src: PropTypes.string,
        titleToOne: PropTypes.string,
        price: PropTypes.string,
        size: PropTypes.number})),
}
