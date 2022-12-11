import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {


    const { name, img, brand, price, ratings } = product;

    return (
        <div className='products'>
            <img src={img} alt=''></img>
            <div className='product-info'>
                <h4 style={{ fontFamily: 'Lato', fontWeight: 600 }}>Name: {name}</h4>
                <p style={{ fontWeight: 700, marginTop: 20, marginBottom: 0 }}>Price: ${price}</p>
                <p style={{ marginTop: 0, marginBottom: 0 }}><small>Brand: {brand}</small></p>
                <p style={{ marginTop: 0 }}><small>Ratings: {ratings} star</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn' style={{ fontWeight: 600, }}>Add to Cart
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;