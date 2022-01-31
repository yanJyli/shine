import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom';
import {auth} from '../firebase';
import {onAuthStateChanged} from 'firebase/auth';

import { connect } from 'react-redux';

import withRouter from '../withRouter';

import MainPage from './Home';
import CollectionPage from './Collection';
import Account from './Account';
import Login from './Form/index';

import clothesCollection from '../services/collection-services';
import favoritesCollection from '../services/favorites-services';
import oderCollection from '../services/oder-services';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      dress: null,
      suit: null,
      sport: null,      
      favoritesClothes: [],
      oderClothes: []
    }
  }

  componentDidMount() {
    onAuthStateChanged(auth, (user) => {
      this.setState({
        currentUser: user
      })
    })

    clothesCollection.getCollection('dress').then((dress) => {
      this.setState({ dress })

      clothesCollection.subscribeToDocument((data) =>
        this.setState({ dress: data })
      )
    })

    clothesCollection.getCollection('suit').then((suit) => {
      this.setState({ suit })

      clothesCollection.subscribeToDocument((data) =>
        this.setState({ suit: data })
      )
    })

    clothesCollection.getCollection('sport').then((sport) => {
      this.setState({ sport })

      clothesCollection.subscribeToDocument((data) =>
        this.setState({ sport: data })
      )
    })

    const { favoritesClothes, oderClothes } = this.state;

    favoritesCollection.getAllCollection(favoritesClothes).then((favoritesClothes) => {
      this.setState({ favoritesClothes })

      favoritesCollection.subscribeToDocument((data) =>
      this.setState({ favoritesClothes: data })
      )
  })

  oderCollection.getAllCollection(oderClothes).then((oderClothes) => {
      this.setState({ oderClothes })

      oderCollection.subscribeToDocument((data) =>
      this.setState({ oderClothes: data })
      )
  })  
  }

  render() {
    const { currentUser, dress, suit, sport, favoritesClothes, oderClothes } = this.state;
    return (
      <Routes>
        <Route path='/' element={<MainPage />} />

        <Route path='/account' element={<Account currentUser={currentUser} oderClothes={oderClothes} favoritesClothes={favoritesClothes}/>} />
        <Route path='/login' element={<Login currentUser={currentUser}/>} />

        <Route path='/collections' element={<CollectionPage currentUser={currentUser} dress={dress} suit={suit} sport={sport}/>} />
      </Routes>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.user.data
  }
}

export default connect (mapStateToProps)(withRouter(App)) 