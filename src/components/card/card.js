import React from 'react'
import './card.css'

function Card({ product }) {
    return (
        <>
            <div className='card-container'>
                <div className='card-content'>
                    <div className='c-img-block'>
                        <img className='c-img' alt='card-image' src={product?.productImg} />
                        <img className='heart-icon' src='/icons/heart.png' alt='heart-icon' />
                    </div>
                    <div className='card-content-block'>
                        <div className='brand-block'>
                            <p className='brand-name'>
                                {product?.brandname}
                            </p>
                        </div>
                        <div className='product-title'>
                            <span className='pro-block'>
                                <p className='product-name'>
                                    {product?.producttitle}
                                </p>
                                {product?.isflipassured && <img src='/f-assured.png' className='f-assured-logo' alt='f-assured-logo' />}

                            </span>
                        </div>

                        <div className='pricess-block'>
                            <span className='dis-price'>₹{product?.MRP}</span>
                            {product?.discountedprice && <span className='main-price'>₹{product?.discountedprice}</span>}
                            {product?.discountinpersent && <span className='dis-per'>{product?.discountinpersent}% off</span>}

                        </div>

                        <div className='size-block'>
                            <span className='size-title'>
                                Size
                            </span>
                            <span className='sizes'>{product?.size}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
