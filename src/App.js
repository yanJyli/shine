import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom';

import MainPage from './components/Home/MainPage';
import AccountPageForm from './components/Account/AccountPageForm';
import CollectionPage from './components/Collection/CollectionPage';
import AccountPage from './components/Account/AccountPage';

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path='/shine' element={<MainPage />} />
        <Route path='/shine/reg' element={<AccountPageForm />} />
        <Route path='/shine/account' element={<AccountPage />} />
        <Route path='/shine/collections' element={<CollectionPage />} />
      </Routes>
    )
  }
}
