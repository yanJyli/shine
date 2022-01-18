import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

import Header from '../Header';
import Forms from './Forms';
import Footer from '../Footer';

export default class Login extends Component {
    render() {
        const { currentUser } = this.props;
        
        return (
            <>
                <Header />
                { currentUser ? ( <Navigate to='/account'/> ) : ( <Forms /> )}
                <Footer />
            </>
        )
    }
}
