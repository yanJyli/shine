import React, { Component } from "react";

import PropTypes from "prop-types";

import CollectionPost from "./CollectionPost";
import ProductModalPage from "./ProductModalPage";
export default class CollectionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addModalPage: false,
      productData: null,
      productImage: null,
      productId: null,
    };
    this.imgRef = React.createRef();
  }

  handleModalPage = (data, img, id) => {
    this.setState({
      addModalPage: !this.state.addModalPage,
      productData: data,
      productImage: img,
      productId: id,
    });
  };

  onClose = () => {
    this.setState({
      addModalPage: !this.state.addModalPage,
    });
  };

  render() {
    const { productData, productImage, productId, addModalPage } = this.state;
    const { currentUser, dress, suit, sport, shirts, handleChangeState } =
      this.props;
    return (
      <>
        <CollectionPost
          item={dress}
          id="dress"
          onClick={(img, id) => this.handleModalPage(dress, img, id)}
          currentUser={currentUser}
          handleChangeState={handleChangeState}
        />
        <CollectionPost
          item={suit}
          id="suit"
          onClick={(img, id) => this.handleModalPage(suit, img, id)}
          currentUser={currentUser}
          handleChangeState={handleChangeState}
        />
        <CollectionPost
          item={sport}
          id="sport"
          onClick={(img, id) => this.handleModalPage(sport, img, id)}
          currentUser={currentUser}
          handleChangeState={handleChangeState}
        />
        <CollectionPost
          item={shirts}
          id="shirts"
          onClick={(img, id) => this.handleModalPage(shirts, img, id)}
          currentUser={currentUser}
          handleChangeState={handleChangeState}
        />
        {currentUser
          ? addModalPage && (
              <ProductModalPage
                currentUser={currentUser}
                onClose={this.onClose}
                item={productData}
                imgRefSrc={productImage}
                productId={productId}
              />
            )
          : null}
      </>
    );
  }
}

CollectionPage.defaultProps = {
  currentUser: null,
  dress: null,
  suit: null,
  sport: null,
};

CollectionPage.propTypes = {
  currentUser: PropTypes.shape({
    username: PropTypes.string,
  }),
  dress: PropTypes.shape({
    title: PropTypes.string,
    caption: PropTypes.string,
    img: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    likes: PropTypes.arrayOf(PropTypes.string),
    comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  }),
  suit: PropTypes.shape({
    title: PropTypes.string,
    caption: PropTypes.string,
    img: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    likes: PropTypes.arrayOf(PropTypes.string),
    comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  }),
  sport: PropTypes.shape({
    title: PropTypes.string,
    caption: PropTypes.string,
    img: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
    likes: PropTypes.arrayOf(PropTypes.string),
    comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  }),
};
