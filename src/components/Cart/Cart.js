import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props);
    const {cart} = props;
    
    // get total
    const total = (cart)=>{
        const reducer = (previous,current)=>previous+current.price;
        const totalAmount =cart.reduce(reducer,0); 
        return totalAmount;
    }
    const totalAmount = total(cart);
    console.log(totalAmount);

    // get shipping charge
    let shippingCharge = 0;
    const getShippingCharge = ()=>{
        if(totalAmount <=0){
            shippingCharge = 0;            
        }
        else if(totalAmount<=100){
            shippingCharge = 60;
        }
        else if(totalAmount>100 && totalAmount<= 500){
            shippingCharge = 120;
        }
        else{
            shippingCharge = 200;
        }
        return shippingCharge;
    }

    const totalShippingCharge = getShippingCharge();

    const getTax = ()=>{
        let tax=0;
        if(totalAmount <=100){
            tax = totalAmount*0.1;
        }
        else{
            tax = totalAmount*0.2;
        }
        return tax;
    }
    const totalTax = getTax();
    const grandTotal = ()=>{
        const total = (totalAmount+totalShippingCharge+totalTax).toFixed(2);
        return total;
    }

    return (
        <div className='cart sticky top-20 z-10'>
            <h2 className='text-lg font-bold mb-2'>Order Summery</h2>
                <p className='text-lg'>Selected Items: {cart.length}</p>
                <p className='text-lg'>Total Price: ${totalAmount}</p>
                <p className='text-lg'>Total Shipping Charge: ${totalShippingCharge}</p>
                <p className='text-lg mb-3'>Total tax: ${totalTax.toFixed(2)}</p>
                <p className='mb-5 text-lg font-bold'>Grand Total: ${grandTotal()}</p>
                <button className='bg-red-500 py-1 px-6 mb-2 text-white rounded'>Clear Cart</button>
                <br />
                <button className='bg-orange-400 py-1 px-3 text-white rounded'>Order Review</button>
        </div>
    );
};

export default Cart;