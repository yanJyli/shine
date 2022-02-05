import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import favoritesCollection from '../../services/favorites-collection';
import cartCollection from '../../services/cart-collection';
import orderCollection from '../../services/order-collection';

import AccountPage from './AccountPage';
export default class Account extends Component {
    constructor(props) {
        super(props);
    
        this.state = {                  
            favoritesClothes: [],
            cartClothes: [],
            orderClothes: []
        }
    }
    
    componentDidMount() {
        const { currentUser } = this.props;
        
        if (!currentUser) {
            return null
        }
        
        favoritesCollection.getCollectionByUsername(currentUser.displayName).then((favoritesClothes) => {
            this.setState({ favoritesClothes })
        })
    
        cartCollection.getCollectionByUsername(currentUser.displayName).then((cartClothes) => {
            this.setState({ cartClothes })
        })

        orderCollection.getCollectionByUsername(currentUser.displayName).then((orderClothes) => {
            this.setState({ orderClothes })
        })
    }

    render() {
        const { cartClothes, favoritesClothes, orderClothes } = this.state;
        const { currentUser, isUserLoading  } = this.props;
        return (
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow">
                    {isUserLoading ? <div className="loader"/> : 
                        (currentUser ? <AccountPage currentUser={currentUser} cartClothes={cartClothes} favoritesClothes={favoritesClothes} orderClothes={orderClothes}/> 
                        : <Navigate to="/login"/> )
                    }
                </div>
            </div>
        )
    }
}

Account.defaultProps = {
    currentUser: null,
}

Account.propTypes = {
    currentUser: PropTypes.shape({
        username: PropTypes.string,
    })
}

