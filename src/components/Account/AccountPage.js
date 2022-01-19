import React, { Component } from 'react';

import AccountNav from './AccountNav';
export default class AccountPage extends Component {
    
    render() {
        return <>
                    <div className='bg-white max-w-screen-lg grid mx-auto'>
                        <AccountNav />
                    </div>
        </>
    }
}
