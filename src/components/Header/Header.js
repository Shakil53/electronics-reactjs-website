import React from 'react';
import logo from '../../../src/images/Seo expert in bangladesh in 2020 shakil ahmed.png';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <div className='header'>
                <img src={logo} alt='shakil'></img>
                <div className='menu-item'>
                    <a href='/Home'>Home</a>
                    <a href='/order'>Order</a>
                    <a href='/categories'>Categories</a>
                    <a href='/shop'>Shop</a>
                </div>
            </div>
        </nav>
    );
};

export default Header; 