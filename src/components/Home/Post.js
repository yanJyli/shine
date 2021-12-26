import React from 'react';

import Image from '../Image';

export default function Post({ src, text }) {
    return (
        <div className='bg-amber-50 max-w-screen-lg grid mx-auto flex items-stretch '>
            <Image img={src}/>
            <p className='w-2/3'>{text}</p>
        </div>
    )
}