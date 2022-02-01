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
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      dress: null,
      suit: null,
      sport: null,
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
    })

    clothesCollection.getCollection('suit').then((suit) => {
      this.setState({ suit })
    })

    clothesCollection.getCollection('sport').then((sport) => {
      this.setState({ sport })
    })   
  }

  render() {
    const { currentUser, dress, suit, sport } = this.state;
    return (
      <Routes>
        <Route path='/' element={<MainPage />} />

        <Route path='/account' element={<Account currentUser={currentUser} />} />
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