import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';

const Header = () => {     
    return (
        <header className='bg-darkBlue fixed w-full top-0'>
          <div className="container h-20 flex items-center">
            <div className='flex-1'>
                <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
                <nav className='flex-none'>
                    <ul className='flex text-white space-x-4 [&>li>a]:p-2 [&>li>a]:inline-block [&>li:hover>a]:bg-lightOrange [&>li>a]:transition-all> [&>li>a]:rounded-md'>
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/order">Order Review</Link></li>
                        <li><Link to="/inventory">Manage Inventory</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
          </div>
        </header>
    );
};

export default Header;