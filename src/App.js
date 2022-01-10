import React, { Component } from 'react';

import MainPage from './components/Home/MainPage';
import AccountPageForm from './components/Account/AccountPageForm';
import CollectionPage from './components/Collection/CollectionPage';
import AccountPage from './components/Account/AccountPage';

export default class App extends Component {
  render() {
    return (
      <div >
        {/*  */}
        <MainPage />
        <AccountPageForm /> 
        <AccountPage /> 
        <CollectionPage />
      </div>
    )
  }
}
