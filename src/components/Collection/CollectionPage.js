import React, { Component } from 'react';

import Header from '../Header';
import CollectionPost from './CollectionPost';
import Footer from '../Footer';

export default class CollectionPage extends Component {

    render() {
        return (
            <>
                <Header />
                <CollectionPost />
                <Footer />
            </>
        )
    }
}
