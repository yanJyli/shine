import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AccountPage from './AccountPage';
export default class Account extends Component {
    render() {
        const { currentUser, isUserLoading  } = this.props;
        return (
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow">
                    {isUserLoading && <div className="loader"/> } 
                    {currentUser && <AccountPage currentUser={currentUser} /> }
                    {!isUserLoading && !currentUser && <Navigate to="/login"/> }
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
        isUserLoading: PropTypes.bool,
    })
}