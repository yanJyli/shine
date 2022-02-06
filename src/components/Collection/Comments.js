import React, { Component } from "react";
import PropTypes from "prop-types";

import AddCommentForm from "./AddCommentForm";

export default class Comments extends Component {
  render() {
    const { comments, commentInput, onAddComment } = this.props;
    return (
      <div className="p-4 pt-0 sm:text-base text-sm">
        {comments.map((comment) => (
          <p key={comment.text} className="mb-1">
            <span className="font-bold mr-1">{comment.username}</span>
            <span>{comment.text}</span>
          </p>
        ))}
        <AddCommentForm commentInput={commentInput} onSubmit={onAddComment} />
      </div>
    );
  }
}

Comments.propTypes = {
  commentInput: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddComment: PropTypes.func.isRequired,
};
