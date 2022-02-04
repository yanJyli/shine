import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Actions from './Actions';
import Comments from './Comments';

import clothesCollection from '../../services/collection-services';
export default class CollectionPost extends Component {
    constructor(props) {
        super(props);
        
        this.commentInputRef = React.createRef()
    }

    handleCommentClickFocus = () => {
        this.commentInputRef.current.focus()
    }

    handleLikeClick = () => {
        const { item, currentUser } = this.props;

        clothesCollection.likePost(item, currentUser.displayName)
    }    

    handleSubmitComment = (text) => {
        const { currentUser, item } = this.props;
    
        clothesCollection.addComment(item, {
            username: currentUser.displayName,
            text, 
        })
    }

    render() {
        const { item, onClick } = this.props;
        if (!item) {
            return <div className="loader"></div>
        }
        return (
            <div className='bg-white max-w-screen-lg grid mx-auto '> 
                <div className='m-4 '>
                    <p className='sm:text-xl text-lg font-bold'>{item.title}</p>
                    <p className='sm:text-base text-sm'>{item.caption}</p>
                    <div className='m-2 flex overflow-x-scroll '>{item.img.map((i) => (
                        <img key={i.src} src={`${process.env.PUBLIC_URL}/${i.src}`} id={i.id} alt='img' onClick={() =>  onClick(i.src)} className='sm:w-1/4 w-1/3 p-1'/>                        
                    ))}
                    </div>
                    <Actions likes={item.likes} onLikeClick={this.handleLikeClick} onCommentClick={this.handleCommentClickFocus}/>
                    <Comments comments={item.comments} commentInput={this.commentInputRef} onAddComment={this.handleSubmitComment}/>
                </div>
            </div>
        )
    }
}

CollectionPost.defaultProps = {
    item: null,
    currentUser: null,
}

CollectionPost.propTypes = {
    onClick: PropTypes.func.isRequired,
    item: PropTypes.shape({
        title: PropTypes.string,
        caption: PropTypes.string,
        img: PropTypes.arrayOf({
            src: PropTypes.string,
            id: PropTypes.string,
        }),
        likes: PropTypes.array,
        comments: PropTypes.arrayOf({
            text: PropTypes.string,
            username: PropTypes.string,
        }),
    }),
    currentUser: PropTypes.shape({
        username: PropTypes.string,
    })
}