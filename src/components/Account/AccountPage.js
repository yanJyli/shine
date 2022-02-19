import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import AccountNav from "./AccountNav";
import MyFavorites from "./MyFavorites";
import MyCart from "./MyCart";
import MyOrder from "./MyOrder";

import { getFavoritesClothes } from "../../store/account/favoritesSlice";
import { getCartClothes } from "../../store/account/cartSlice";
import { getOrderClothes } from "../../store/account/orderSlice";
export class AccountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addProducts: false,
      addCart: false,
      addStart: true,
      addOrder: false,
    };
  }

  handleClickFavorites = () => {
    const { currentUser, dispatch } = this.props;

    if (!currentUser) {
      return null;
    }
    this.setState({
      addProducts: true,
      addCart: false,
      addStart: false,
      addOrder: false,
    });

    dispatch(getFavoritesClothes(currentUser.displayName));
  };

  handleClickCart = () => {
    const { currentUser, dispatch } = this.props;

    if (!currentUser) {
      return null;
    }
    this.setState({
      addCart: true,
      addProducts: false,
      addStart: false,
      addOrder: false,
    });

    dispatch(getCartClothes(currentUser.displayName));
  };

  handleClickOrder = () => {
    const { currentUser, dispatch } = this.props;

    if (!currentUser) {
      return null;
    }
    this.setState({
      addCart: false,
      addProducts: false,
      addStart: false,
      addOrder: true,
    });

    dispatch(getOrderClothes(currentUser.displayName));
  };

  render() {
    const { addStart, addProducts, addCart, addOrder } = this.state;
    const { currentUser, favoritesClothes, cartClothes, orderClothes } =
      this.props;

    return (
      <div className="bg-white max-w-screen-lg flex mx-auto">
        <AccountNav
          onClickFavorites={this.handleClickFavorites}
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
            handleChangeState={this.handleClickFavorites}
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

const mapStateToProps = (state) => {
  return {
    favoritesClothes: state.favoritesClothes.data,
    cartClothes: state.cartClothes.data,
    orderClothes: state.orderClothes.data,
  };
};

export default connect(mapStateToProps)(AccountPage);
