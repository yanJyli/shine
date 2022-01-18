import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';


import Header from '../Header';
import AccountPage from './AccountPage';
import Footer from '../Footer';

export default class Account extends Component {

    render() {
        const { currentUser } = this.props;
        return (
            <>
                <Header />
                { currentUser ? ( <AccountPage /> ) : ( <Navigate to='/login'/> )}
                <Footer />
            </>
        )
    }
}