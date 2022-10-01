import React from 'react';
import logo from '../../images/Logo.svg';

const Header = () => {     
    return (
        <header className='bg-darkBlue fixed w-full top-0'>
          <div className="container h-20 flex items-center">
            <div className='flex-1'>
                <a href="/home"><img src={logo} alt="logo" /></a>
                </div>
                <nav className='flex-none'>
                    <ul className='flex text-white space-x-4 [&>li>a]:p-2 [&>li>a]:inline-block [&>li:hover>a]:bg-lightOrange [&>li>a]:transition-all> [&>li>a]:rounded-md'>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/order">Order Review</a></li>
                        <li><a href="/inventory">Manage Inventory</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>
          </div>
        </header>
    );
};

export default Header;