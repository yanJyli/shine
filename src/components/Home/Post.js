import React from 'react';

export default function Post({ src, text, caption, right }) {
    return (
        <div className='bg-white max-w-screen-lg mx-auto flex p-4'>
            <img src={src} alt={caption} className={`w-1/5 object-cover mt-8 ${right}`}/>
            <span className=' w-auto mt-8 p-4 text-[18px]'>{text}</span>
            
        </div>
    )
}