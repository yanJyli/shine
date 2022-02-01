import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Header from '../Header';
import CollectionPost from './CollectionPost';
import ProductModalPage from './ProductModalPage';
import Footer from '../Footer';
export default class CollectionPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {            
            addModalPage: false,
        }
        this.imgRef = React.createRef();
    }

    handleModalPage = (data, img) => {
        this.setState({
            addModalPage: !this.state.addModalPage,
            productData: data,
            productImage: img
        })
    }

    onClose = () => {
        this.setState({
            addModalPage: !this.state.addModalPage,
        })
    }

    render() {
        const { productData, productImage} = this.state;
        const { currentUser, dress, suit, sport } = this.props;
        return (
            <>
                <Header />
                <CollectionPost item={dress} onClick={(img) => this.handleModalPage(dress, img)} currentUser={currentUser}/>
                <CollectionPost item={suit} onClick={(img) => this.handleModalPage(suit, img)} currentUser={currentUser}/>
                <CollectionPost item={sport} onClick={(img) => this.handleModalPage(sport, img)} currentUser={currentUser}/>
                { currentUser ? ( this.state.addModalPage && <ProductModalPage currentUser={currentUser} onClose={this.onClose} item={productData} imgRefSrc={productImage}/> ) : null}
                
                <Footer />
            </>
        )
    }
}

CollectionPage.defaultProps = {
    currentUser: null,
    dress: null,
    suit: null,
    sport: null,
}

CollectionPage.propTypes = {
    currentUser: PropTypes.shape({
        username: PropTypes.string,
    }),
    dress: PropTypes.shape({
        title: PropTypes.string,
        caption: PropTypes.string,
        img: PropTypes.shape({
            src: PropTypes.string,
            id: PropTypes.string,
        }),
        likes: PropTypes.number,
        comments: PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string,
        }),
    }),
    suit: PropTypes.shape({
        title: PropTypes.string,
        caption: PropTypes.string,
        img: PropTypes.shape({
            src: PropTypes.string,
            id: PropTypes.string,
        }),
        likes: PropTypes.number,
        comments: PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string,
        }),
    }),
    sport: PropTypes.shape({
        title: PropTypes.string,
        caption: PropTypes.string,
        img: PropTypes.shape({
            src: PropTypes.string,
            id: PropTypes.string,
        }),
        likes: PropTypes.number,
        comments: PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string,
        }),
    }),
}

