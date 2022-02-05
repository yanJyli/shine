import React, { Component } from 'react';

export default class MyOrder extends Component {
    render() {
        const {orderClothes} = this.props;  
        return (
            <div className="grid w-full border p-4">
                <p className="text-center text-lg">Мои заказы</p>
                <div className="grid place-items-center">
                    <div className="w-full">
                    {orderClothes.map((i) => (
                        <div className="w-min flex m-4">
                            <img src={`${process.env.PUBLIC_URL}/${i.src}`} alt="img" className=" mr-4 "/>
                            <div className="m-2 p-2">
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
