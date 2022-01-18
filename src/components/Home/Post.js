import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ src, text, caption, right }) {
    return (
        <div className='bg-white max-w-screen-lg mx-auto flex p-4'>
            <img src={src} alt={caption} className={`w-1/5 object-cover mt-8 ${right}`}/>
            <span className=' w-auto mt-8 p-4 text-[18px]'>{text}</span>
            
        </div>
    )
}

Image.defaultProps = {
    caption: 'No caption',
};
Post.propTypes = {
    src: PropTypes.string.isRequired,
    caption: PropTypes.string,
    text: PropTypes.string.isRequired,
}