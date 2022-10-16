import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        console.log(product);
        total = total+product.price;
        shipping = shipping+ product.shipping;
    }
    // tax
    const tax = parseFloat((total*0.1).toFixed(2));
    // grand total
    const grandTotal = (total+shipping+tax).toFixed(2);

    return (
        <div className='cart sticky top-20 z-10 p-3'>
            <h2 className='text-lg font-bold mb-2'>Order Summery</h2>
                <p className='text-lg'>Selected Items: {cart.length}</p>
                <p className='text-lg'>Total Price: ${total}</p>
                <p className='text-lg'>Total Shipping Charge: ${shipping}</p>
                <p className='text-lg mb-3'>Total tax: ${tax}</p>
                <p className='mb-5 text-lg font-bold'>Grand Total: ${grandTotal}</p>
                <button className='bg-red-500 py-1 px-6 mb-2 text-white rounded'>Clear Cart</button>
                <br />
                <button className='bg-orange-400 py-1 px-3 text-white rounded'>Order Review</button>
        </div>
    );
};

export default Cart;