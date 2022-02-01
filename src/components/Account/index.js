import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import favoritesCollection from '../../services/favorites-services';
import oderCollection from '../../services/oder-services';

import Header from '../Header';
import AccountPage from './AccountPage';
import Footer from '../Footer';

export default class Account extends Component {
    constructor(props) {
        super(props);
    
        this.state = {                  
            favoritesClothes: [],
            oderClothes: []
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
    
        oderCollection.getCollectionByUsername(currentUser.displayName).then((oderClothes) => {
            this.setState({ oderClothes })
        })
    }

    render() {
        const { oderClothes, favoritesClothes } = this.state;
        const { currentUser  } = this.props;
        return (
            <div className="flex flex-col min-h-screen ">
                <div className='flex-grow'>
                    <Header />
                    { currentUser ? ( <AccountPage currentUser={currentUser} oderClothes={oderClothes} favoritesClothes={favoritesClothes}/> ) : ( <Navigate to='/login'/> )}
                </div>
                <Footer className=""/>
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

