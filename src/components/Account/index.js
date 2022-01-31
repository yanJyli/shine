import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../Header';
import AccountPage from './AccountPage';
import Footer from '../Footer';

export default class Account extends Component {

    render() {
        const { currentUser, oderClothes, favoritesClothes } = this.props;
        return (
            <div className="flex flex-col min-h-screen ">
                <div className='flex-grow'>
                    <Header />
                    { currentUser ? ( <AccountPage  oderClothes={oderClothes} favoritesClothes={favoritesClothes}/> ) : ( <Navigate to='/login'/> )}
                </div>
                <Footer className=""/>
            </div>
        )
    }
}

