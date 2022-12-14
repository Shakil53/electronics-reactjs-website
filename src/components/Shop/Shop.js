import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;