import React, { Component } from "react";

import cartCollection from "../../services/cart-services";
import favoritesCollection from "../../services/favorites-services";

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

    toCart.map((i) => {
      const {specifiedId} = Math.round(Math.random() * 100  + 1)
      cartCollection.createDocument(i, specifiedId)

      favoritesCollection.deletetCollection(specifiedId).then((favoritesClothes) => {
        this.props.favoritesClothes = favoritesClothes

    })
      
    });
    this.setState({
      addModalPage: !this.state.addModalPage,
      showfavoritesClothes: !this.state.showfavoritesClothes,
    });
  };

  onClose = () => {
    this.setState({
        addModalPage: !this.state.addModalPage,        
        showcartClothes: this.state.showcartClothes
    })
  }

  render() {
    const { favoritesClothes } = this.props;
    const { showfavoritesClothes, addModalPage } = this.state;
    return (
      <div className="grid border p-4 w-full">
        <p className="text-center text-sm sm:text-lg">Мои избранные товары</p>

        {showfavoritesClothes && (
          <div className="w-full">
            {favoritesClothes.map((i) => (
              <div className="w-min flex sm:m-4 my-2 ">
                <input
                  type="checkbox"
                  onChange={() => this.handleChange(i)}
                  className="text-center sm:m-4 m-2"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/${i.src}`}
                  alt="img"
                  className="sm:mr-4 mr-2 sm:w-full w-2/3"
                />
                <div className=" p-2 text-sm sm:text-lg ">
                  <p className="w-full ">{`${i.titleToOne}, ${i.price}`}</p>
                  <p className="w-full">{`${i.size} размер`}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {!favoritesClothes ? null : (
          <div className="grid place-items-center">
            <button
              onClick={this.handleMoveToCart}
              className="w-fit hover:bg-amber-50 p-2"
            >
              Добавить в корзину
            </button>
            {addModalPage && (
              <FavoritesModalPage onClose={this.onClose}/>
            )}
          </div>
        )}
      </div>
    );
  }
}