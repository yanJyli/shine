import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom';
import {auth} from '../firebase';
import {onAuthStateChanged} from 'firebase/auth';

import { connect } from 'react-redux';

import Header from './Header';
import Footer from './Footer';

import MainPage from './Home';
import CollectionPage from './Collection';
import Account from './Account';
import Login from './Form/index';

import clothesCollection from '../services/collection-services';
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      dress: null,
      suit: null,
      sport: null,
      isLoadingUser: true
    }
  }

  componentDidMount() {
    onAuthStateChanged(auth, (user) => {
      this.setState({
        currentUser: user,
        isUserLoading: false,
      })
    })

    clothesCollection.getCollection('dress').then((dress) => {
      this.setState({ dress })
    })

    clothesCollection.getCollection('suit').then((suit) => {
      this.setState({ suit })
    })

    clothesCollection.getCollection('sport').then((sport) => {
      this.setState({ sport })
    })   
  }

  render() {
    const { currentUser, dress, suit, sport, isLoadingUser } = this.state;
    return (
      <>
        <Header />
        <Routes>          
          <Route path='/' element={<MainPage />} />
          <Route path='/account' element={<Account currentUser={currentUser} isLoadingUser={isLoadingUser} />} />
          <Route path='/login' element={<Login currentUser={currentUser}/>} />
          <Route path='/collections' element={<CollectionPage currentUser={currentUser} dress={dress} suit={suit} sport={sport}/>} />          
        </Routes>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.user.data
  }
}

export default connect (mapStateToProps)(App) 