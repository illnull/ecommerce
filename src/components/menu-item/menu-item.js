import React from 'react'
import './menu-item.scss'

const MenuItem = ({ title, imageURL, size }) => (
    <div className={`${size} menu-item`}>
        <div className='background-image' style={{ backgroundImage: `url(${imageURL})` }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
        </div>
    </div>
)

export default MenuItem