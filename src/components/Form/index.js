import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../Header';
import Forms from './Forms';
import Footer from '../Footer';

export default class Login extends Component {
    render() {
        const { currentUser } = this.props;
        
        return (
            <div className="flex flex-col min-h-screen ">
                <div className='flex-grow'>
                    <Header />
                    { currentUser ? ( <Navigate to='/account'/> ) : ( <Forms /> )}
                </div>
                <Footer className=""/>
            </div>            
        )
    }
}


