import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom';
import {auth} from '../firebase';
import {onAuthStateChanged} from 'firebase/auth';


import MainPage from './Home';
import CollectionPage from './Collection';
import Account from './Account';
import Login from './Form/index';
import ProductPage from './Collection/ProductPage';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: { username: '' },
      user: {
        username: '',
        fullName: '',
        profileSrc: '',
      }
    }
  }

  componentDidMount() {
    onAuthStateChanged(auth, (user) => {
      this.setState({
        currentUser: user
      })
    })
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Routes>
        <Route path='/' element={<MainPage />} />

        <Route path='/account' element={<Account currentUser={currentUser}/>} />
        <Route path='/login' element={<Login currentUser={currentUser}/>} />

        <Route path='/collections' element={<CollectionPage />} />
        <Route path='/collections/product' element={<ProductPage />} />
      </Routes>
    )
  }
}
