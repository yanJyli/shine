import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        }
    }
    
    clearForm = () => {
        this.setState({
            comment:'',
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {comment} = this.state;
        const {onSubmit} = this.props;

        onSubmit(comment);

        this.clearForm();
    }

    handleCommentChange = (e) => {
        this.setState({
            comment:e.target.value
        })
    }
    render() {
        const {commentInput} = this.props;
        const {comment} = this.state;

        return (
            <form className="flex" onSubmit={this.handleSubmit}>
                <input type="text" name="comment" placeholder="Добавить комментарий..." className="hover:bg-amber-50 mr-4 p-2 text-gray-400 sm:text-sm text-xs" 
                ref={commentInput} onChange={this.handleCommentChange} value = {comment}/>
                <button type="submit" className="sm:text-sm text-xsm-2 w-min p-2 hover:bg-amber-50" >Добавить</button>
            </form>
        )
    }
}

AddComment.propTypes = {
    commentInput: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
}