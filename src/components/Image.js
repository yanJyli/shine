import React from 'react'

export default function Image({src, caption}) {
    return <img src={src} alt={caption} className='w-1/5 object-cover'/>
}