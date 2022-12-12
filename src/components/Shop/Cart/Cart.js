import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    console.log(cart);

    let total = 0;
    for (const product of cart) {
        total = total + parseFloat(product.price);

    }

    const tax = total * 0.1;

    const grandTotal = total + tax;


    return (
        <div className='cart-container'>
            <h4 style={{ textAlign: 'center', fontFamily: 'Lato' }}>Order Summary</h4>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;