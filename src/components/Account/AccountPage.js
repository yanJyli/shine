import React, { Component } from "react";
import PropTypes from "prop-types";

import AccountNav from "./AccountNav";
import MyFavorites from "./MyFavorites";
import MyCart from "./MyCart";
import MyOrder from "./MyOrder";

import favoritesCollection from "../../services/favorites-collection";
import cartCollection from "../../services/cart-collection";
import orderCollection from "../../services/order-collection";
export default class AccountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addProducts: false,
      addCart: false,
      addStart: true,
      addOrder: false,
      favoritesClothes: [],
      cartClothes: [],
      orderClothes: [],
    };
  }

  handleClickProducts = () => {
    const { currentUser } = this.props;

    if (!currentUser) {
      return null;
    }
    this.setState({
      addProducts: true,
      addCart: false,
      addStart: false,
      addOrder: false,
    });
    favoritesCollection
      .getCollectionByUsername(currentUser.displayName)
      .then((favoritesClothes) => {
        this.setState({ favoritesClothes });
      });
  };

  handleClickCart = () => {
    const { currentUser } = this.props;

    if (!currentUser) {
      return null;
    }
    this.setState({
      addCart: true,
      addProducts: false,
      addStart: false,
      addOrder: false,
    });
    cartCollection
      .getCollectionByUsername(currentUser.displayName)
      .then((cartClothes) => {
        this.setState({ cartClothes });
      });
  };

  handleClickOrder = () => {
    const { currentUser } = this.props;

    if (!currentUser) {
      return null;
    }
    this.setState({
      addCart: false,
      addProducts: false,
      addStart: false,
      addOrder: true,
    });
    orderCollection
      .getCollectionByUsername(currentUser.displayName)
      .then((orderClothes) => {
        this.setState({ orderClothes });
      });
  };

  render() {
    const {
      addStart,
      addProducts,
      addCart,
      addOrder,
      favoritesClothes,
      cartClothes,
      orderClothes,
    } = this.state;
    const { currentUser } = this.props;

    return (
      <div className="bg-white max-w-screen-lg flex mx-auto">
        <AccountNav
          onClickProducts={this.handleClickProducts}
          onClickCart={this.handleClickCart}
          onClickOrder={this.handleClickOrder}
        />
        {addStart && (
          <div className="w-full text-center text-lg sm:text-xl m-4">
            Добро пожаловать в личный кабинет, {currentUser.displayName}!
          </div>
        )}
        {addProducts && (
          <MyFavorites
            favoritesClothes={favoritesClothes}
            currentUser={currentUser}
            handleChangeState={this.handleClickProducts}
          />
        )}
        {addCart && (
          <MyCart
            cartClothes={cartClothes}
            currentUser={currentUser}
            handleChangeState={this.handleClickCart}
          />
        )}
        {addOrder && (
          <MyOrder orderClothes={orderClothes} currentUser={currentUser} />
        )}
      </div>
    );
  }
}

AccountPage.defaultProps = {
  currentUser: null,
};

AccountPage.propTypes = {
  currentUser: PropTypes.shape({
    username: PropTypes.string,
  }),
};
