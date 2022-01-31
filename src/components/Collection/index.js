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
        const { currentUser, dress, suit, sport} = this.props;
        return (
            <>
                <Header />
                <CollectionPost item={dress} onClick={(img) => this.handleModalPage(dress, img)} />
                <CollectionPost item={suit} onClick={(img) => this.handleModalPage(suit, img)}/>
                <CollectionPost item={sport} onClick={(img) => this.handleModalPage(sport, img)}/>
                { currentUser ? ( this.state.addModalPage && <ProductModalPage onClose={this.onClose} item={productData} imgRefSrc={productImage}/> ) : null}
                
                <Footer />
            </>
        )
    }
}


