import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <div className="container App flex justify-between item-center h-15 mx-auto  px-4 bg-black text-white sticky top-0 z-10">
      <img className='w-100' src={logo} alt='' />
      <ul className="main-menu flex">
        <li className='p-4'>
          <a href="/home">Home</a>
        </li>
        <li className='p-4'>
          <a href="/home">Order</a>
        </li>
        <li className='p-4'>
          <a href="/home">Order Manage</a>
        </li>
        <li className='p-4'>
          <a href="/home">Shop</a>
        </li>
      </ul>
    </div>
    );
};

export default Header;