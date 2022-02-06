import React from "react";
import PropTypes from "prop-types";

export default function Image({ src, caption }) {
  return (
    <img
      src={src}
      alt={caption}
      className="w-1/4 object-cover mt-4 sm:mr-8 mx-4"
    />
  );
}

Image.defaultProps = {
  caption: "No caption",
};
Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string,
};
