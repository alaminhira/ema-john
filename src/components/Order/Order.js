import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakeDb'

const Order = () => {
    const { initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const removeItem = id => {
        const remainingCart = cart.filter(product => product.id !== id);
        setCart(remainingCart)
        removeFromDb(id);
    }

    return (
        <section className='products-container mt-24'>
        <div className="container">
            <div className="ordered-list space-y-4 w-6/12 mx-auto">
               {
                cart.length ? cart.map(product => <ReviewItem key={product.id} product={product} removeItem={removeItem} />) :
                <h2 className='text-xl'>No item in the cart. please {<Link className='text-red-400 underline' to='/'>Shop</Link>}</h2>
               }
            </div>
        </div>
        <aside className="cart-container fixed right-0 top-0 mt-20 w-64 h-full bg-lightYellow">
            <Cart cartItems={cart} />
        </aside>
    </section>
    );
};

export default Order;