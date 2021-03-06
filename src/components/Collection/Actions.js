import React, { Component } from "react";
import PropTypes from "prop-types";

import { ReactComponent as ComentIcon } from "../img/icons/instagram-comment.svg";

export default class Actions extends Component {
  render() {
    const { likes, onCommentClick, onLikeClick, srcIconLike } = this.props;
    return (
      <div className="p-4">
        <div className="flex">
          <img
            src={`${process.env.PUBLIC_URL}/${srcIconLike}`}
            onClick={onLikeClick}
            alt="img"
            className="w-6 cursor-pointer mr-4 hover:bg-amber-50"
          />
          <ComentIcon
            onClick={onCommentClick}
            className="w-6 cursor-pointer mr-4 hover:bg-amber-50"
          />
        </div>
        <p className="mt-2 font-bold sm:text-base text-sm">
          {likes.length === 1
            ? `${likes.length} likes`
            : `${likes.length} likes`}
        </p>
      </div>
    );
  }
}

Actions.propTypes = {
  likes: PropTypes.array.isRequired,
  onCommentClick: PropTypes.func.isRequired,
  onLikeClick: PropTypes.func.isRequired,
  srcIconLike: PropTypes.string.isRequired,
};
