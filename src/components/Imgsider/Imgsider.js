import React from 'react'
import './imgsider.css'

function Imgsider() {
    return (
        <div className='img-container'>
            <div className='img-show'>
                <img loading='lazy' className='imgs' src='/jacket.jpg' alt='topimg' />
            </div>
            <div className='img-txt-container'>
                <span className='img-txt'>
                    <p className='txt-one'>Min. 60% Off</p>
                    <p className='txt-two'>Girls shrugs</p>
                </span>
            </div>
        </div>
    )
}

export default Imgsider
