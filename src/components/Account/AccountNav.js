import React, { Component } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import PropTypes from "prop-types";
export default class AccountNav extends Component {
  render() {
    const { onClickFavorites, onClickCart, onClickOrder } = this.props;
    return (
      <div className="border p-4 w-min text-base sm:text-xl">
        <button
          onClick={onClickFavorites}
          className="text-left w-fit cursor-pointer hover:bg-amber-50 p-2"
        >
          Избранные
        </button>
        <button
          onClick={onClickCart}
          className="text-left w-fit cursor-pointer hover:bg-amber-50 p-2"
        >
          Корзина
        </button>
        <button
          onClick={onClickOrder}
          className="text-left w-fit cursor-pointer hover:bg-amber-50 p-2"
        >
          Заказы
        </button>
        <button
          onClick={() => signOut(auth)}
          className="text-left w-fit cursor-pointer hover:bg-amber-50 p-2"
        >
          Выйти
        </button>
      </div>
    );
  }
}

AccountNav.propTypes = {
  onClickFavorites: PropTypes.func.isRequired,
  onClickCart: PropTypes.func.isRequired,
  onClickOrder: PropTypes.func.isRequired,
};
