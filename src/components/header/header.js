import React from 'react'
import './header.css'

function Header() {
    return (
        <div className='header-container'>
            <div className='header-content'>
                <div className='img-block'>
                    <span className='img-content'>
                        <img className='flipkart-img' alt='flipkart' src='/flipkart-plus.png' />
                    </span>
                    <i className='exp-title'>
                        Explore<i className='plus-title'>Plus<sup><img src='/icons/plus.png' alt='plusicon' className='plus-icon' /></sup></i>
                    </i>
                </div>

                <div className='search-block'>
                    <input className='search-box' type={'text'} placeholder='Search for products, brands and more' />
                    <img className='search-icon' alt='search-icon' src='/icons/bl-search.png' />
                </div>

                <div className='log-btn-block'>
                    <button className='log-btn'>Login</button>
                </div>

                <div className='seller-block'>
                    <p className='seller-title'>Become a Seller</p>
                </div>

                <div className='more-block'>
                    <span className='more-item'>
                        <span className='more-title'>More</span>
                        <img className='wh-arrow-down' alt='wh-arrow-down' src='/icons/wh-arrow-down.png' />
                    </span>
                </div>

                <div className='cart-block'>
                    <img className='wh-cart' alt='wh-cart' src='/icons/cart.png' />
                    <span className='cart-title'>Cart</span>
                </div>

            </div>
        </div>
    )
}

export default Header
