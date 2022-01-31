import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Actions from './Actions';
import Comments from './Comments';

export default class CollectionPost extends Component {
    constructor(props) {
        super(props);
        
        this.commentInputRef = React.createRef();
    }

    handleLikeClick = () => {
        const {collection} = this.props;
        this.setState({
            collection: {
            ...collection.item,  
            likes: this.state.likes + 1,
        },
        })
    }

    handleCommentClick = () => {
        this.commentInputRef.current.focus();
    }

    handleAddComment = (text) => {
        const {collection} = this.props;
        this.setState({
            collection:{
            ...collection,  
            comments: [...collection, {text, username: 'yanJyli'}],
        },
        })
    }

    render() {
        const {item, onClick } = this.props;
        return (
            <div className='bg-white max-w-screen-lg grid mx-auto '> 
                <div className='m-4 '>
                    <p className='text-xl font-bold'>{item.title}</p>
                    <p className='text-base'>{item.caption}</p>
                    <div className='m-2 flex overflow-x-scroll '>{item.img.map((i) => (
                        <img key={i.id} src={`${process.env.PUBLIC_URL}/${i.src}`} id={i.id} alt='img' onClick={() => onClick(i.src)} className='w-1/4 p-1'/>
                        
                    ))}</div>
                    <Actions likes={item.likes} onLikeClick={this.handleLikeClick} onCommentClick={this.handleCommentClick}/>
                    <Comments comments={item.comments} commentInput={this.commentInputRef} onAddComment={this.handleAddComment}/>
                </div>
            </div>
        )
    }
}

CollectionPost.propTypes = {
    onClick: PropTypes.func.isRequired,
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
        img: PropTypes.shape({
            src: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }).isRequired,
        likes: PropTypes.number.isRequired,
        comments: PropTypes.shape({
            text: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
}