import React, { useEffect, useState } from 'react';
import { calculateTotal } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    const handleAddToCart = (product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
        calculateTotal(newCart);
    }
    return (
        <div className='shop-container grid grid-cols-3 gap-4'>
            <div class="col-span-2 product-wrapper mt-5">
                <div className="grid grid-cols-3 gap-4">
                {
                    products.map(product=><Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
                </div>
            </div>
            <div class="order-wrapper bg-orange-200 h-100 p-3">
                {
                    <Cart cart={cart}></Cart>
                }

            </div>    
        </div>

    );
};

export default Shop;