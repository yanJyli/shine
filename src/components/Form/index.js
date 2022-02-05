import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import Forms from './Forms';

export default class Login extends Component {
    render() {
        const { currentUser } = this.props;        
        return (
            <div className="flex flex-col min-h-screen flex-grow w-full">                
                { currentUser ? ( <Navigate to="/account"/> ) : ( <Forms /> )}      
            </div>            
        )
    }
}

Login.defaultProps = {
    currentUser: null,
}

Login.propTypes = {
    currentUser: PropTypes.shape({
        username: PropTypes.string,
    })
}
