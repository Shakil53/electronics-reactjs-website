import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setproduct] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('FakeData.json')
            .then(res => res.json())
            .then(data => setproduct(data))
    }, [])

    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart)
    }


    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product =>
                        <Product product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className='cart-container'>
                <h4>Order Summary</h4>
                <p>Selected Item: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;