import React, { Component } from "react";
import PropTypes from "prop-types";

import cartCollection from "../../services/cart-collection";
import favoritesCollection from "../../services/favorites-collection";

import FavoritesModalPage from "./FavoritesModalPage";

export default class MyFavorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addModalPage: false,
      showfavoritesClothes: true,
      toCart: [],
    };
  }

  handleChange = (i) => {
    const { currentUser } = this.props;
    this.setState({
      toCart: [
        ...this.state.toCart,
        {
          itemId: i.itemId,
          src: i.src,
          titleToOne: i.titleToOne,
          size: i.size,
          price: i.price,
          username: currentUser.displayName,
        },
      ],
    });
  };

  handleMoveToCart = () => {
    const { toCart } = this.state;
    const { handleChangeState } = this.props;

    toCart.map((i) => {
      cartCollection.createDocument(i, i.itemId);

      favoritesCollection.deletetCollection(i.itemId);
    });

    handleChangeState();

    this.setState({
      addModalPage: !this.state.addModalPage,
      showfavoritesClothes: !this.state.showfavoritesClothes,
    });
  };

  onClose = () => {
    this.setState({
      addModalPage: !this.state.addModalPage,
      showcartClothes: this.state.showcartClothes,
    });
  };

  onDelete = (i) => {
    const { handleChangeState } = this.props;
    favoritesCollection.deletetCollection(i.itemId);
    handleChangeState();
  };

  render() {
    const { favoritesClothes } = this.props;
    const { showfavoritesClothes, addModalPage } = this.state;
    return (
      <div className="grid border p-4 w-full">
        <p className="text-center text-sm sm:text-lg">Мои избранные товары</p>

        {showfavoritesClothes && (
          <div className="w-full">
            {favoritesClothes.map((i) => (
              <div key={i.itemId} className="w-min flex sm:m-2 my-2">
                <input
                  type="checkbox"
                  onChange={() => this.handleChange(i)}
                  className="text-center sm:m-2 my-2"
                />

                <img
                  src={`${process.env.PUBLIC_URL}/${i.src}`}
                  alt="img"
                  className="sm:mr-4 mr-2 sm:w-full w-2/3"
                />
                <div className="p-2 text-sm sm:text-lg ">
                  <p className="w-full ">{`${i.titleToOne}, ${i.price}`}</p>
                  <p className="w-full">{`${i.size} размер`}</p>
                  <button
                    onClick={() => this.onDelete(i)}
                    className="w-min h-min border my-2 text-sm rounded hover:bg-amber-50 px-1"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {favoritesClothes ? (
          <div className="grid place-items-center">
            <button
              onClick={this.handleMoveToCart}
              className="w-fit hover:bg-amber-50 p-2"
            >
              Добавить в корзину
            </button>
          </div>
        ) : null}
        {addModalPage && <FavoritesModalPage onClose={this.onClose} />}
      </div>
    );
  }
}

MyFavorites.defaultProps = {
  favoritesClothes: null,
};

MyFavorites.propTypes = {
  favoritesClothes: PropTypes.arrayOf(
    PropTypes.shape({
      itemId: PropTypes.string,
      username: PropTypes.string,
      src: PropTypes.string,
      titleToOne: PropTypes.string,
      price: PropTypes.string,
      size: PropTypes.number,
    })
  ),
};
