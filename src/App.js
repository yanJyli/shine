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
        <Route path='/' element={<MainPage />} />
        <Route path='/reg' element={<AccountPageForm />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/collections' element={<CollectionPage />} />
      </Routes>
    )
  }
}
