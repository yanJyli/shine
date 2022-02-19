import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { connect } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";

import MainPage from "./Home";
import CollectionPage from "./Collection";
import Account from "./Account";
import Login from "./Form";

import { getCollectionDress } from "../store/collection/dressSlice";
import { getCollectionSuit } from "../store/collection/suitSlice";
import { getCollectionSport } from "../store/collection/sportSlice";
import { getCollectionShirts } from "../store/collection/shirtsSlice";
import { setUser } from "../store/auth/authSlice";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUserLoading: true,
    };
  }

  handleChangeState = () => {    
    const { dispatch } = this.props;

    dispatch(getCollectionDress());

    dispatch(getCollectionSuit());

    dispatch(getCollectionSport());

    dispatch(getCollectionShirts());
  };  

  componentDidMount() {
    const { dispatch } = this.props;
    onAuthStateChanged(auth, (user) => {      
      dispatch(setUser(user));      
    });

    this.setState({
        isUserLoading: false,
    });

    this.handleChangeState();
  }

  render() {
    const { isUserLoading } = this.state;
    const { currentUser, dress, suit, sport, shirts } = this.props;
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/account"
            element={
              <Account
                currentUser={currentUser}
                isUserLoading={isUserLoading}
              />
            }
          />
          <Route path="/login" element={<Login currentUser={currentUser} />} />
          <Route
            path="/collections"
            element={
              <CollectionPage
                currentUser={currentUser}
                dress={dress}
                suit={suit}
                sport={sport}
                shirts={shirts}
                handleChangeState={this.handleChangeState}
              />
            }
          />
        </Routes>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dress: state.dress.data,
    suit: state.suit.data,
    sport: state.sport.data,
    shirts: state.shirts.data,
    currentUser: state.auth.currentUser,
  };
};

export default connect(mapStateToProps)(App);
