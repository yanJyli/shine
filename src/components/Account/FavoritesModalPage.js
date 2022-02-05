import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FavoritesModalPage extends Component {
    render() {
        const {onClose} = this.props;
        return (            
            <div className="bg-gray-400/50 w-full h-full fixed top-0 left-0 flex items-center justify-center">
                <div className="bg-white p-8 justify-center text-center">
                    <p className="text-lg m-2">Товар добавлен в корзину</p>
                    <button onClick={onClose} className="m-2 border rounded px-2 hover:bg-gray-300">Вернуться</button>
                </div>
            </div>
        )
    }
}

FavoritesModalPage.propTypes = {
    onClose: PropTypes.func.isRequired,
}