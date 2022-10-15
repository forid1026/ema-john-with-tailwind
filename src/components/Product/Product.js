import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img,name,price,ratings, seller} = props.product;
    const {handleAddToCart} = props;
    return (
        <div className='single-product relative rounded border-slate-200 border-2  gap-3'>
            <img src={img} className=
            "rounded-[10px] p-1" alt="Product" />
            <div className="product-info px-2 mb-[3rem]">
            <p className='font-normal leading-6 text-xl tracking-wider mb-2 mt-3'>{name}</p>
            <p className='text-lg'>Price: ${price}</p>
            <p className='text-lg'>Manufacture: {seller}</p>
            <p className='text-lg mb-8'>Ratings {ratings} star</p>
            </div>
            <button className='add-to-cart absolute bottom-0 bg-[#FF99004D] hover:bg-orange-300 text-dark py-2  w-full ' onClick={()=>handleAddToCart(props.product)}>Add To Cart</button>
        </div>
    );
};

export default Product;