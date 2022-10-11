import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { retriveFromDb, storeToDb } from '../../utilities/fakeDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const products = useLoaderData();
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cart = retriveFromDb('shopping-cart');
        
        const newCartItems = []; 
        if (products.length) {
            for (const id in cart) {
                const product = products.find(pd =>  pd.id === id);
                product.quantity = cart[id];
                newCartItems.push(product);
            }
           setCartItems(newCartItems);
        }
        
    }, [products])

    const addToCart = product => {
        const selectedProduct = cartItems.find(item => item.id === product.id);
        const restProducts = cartItems.filter(item => item.id !== product.id);

        let newCart, newProduct;
        if (!selectedProduct) {
            product.quantity = 1;
            newCart = [...restProducts, product];
            newProduct = product;
        } else {
            selectedProduct.quantity++;
            newCart = [...restProducts, selectedProduct];
            newProduct = selectedProduct
        }

        setCartItems(newCart);
        storeToDb(newProduct.id, newProduct.quantity);
    }

    return (
        <section className='products-container mt-24'>
            <div className="container">
                <div className="products-container w-10/12 grid grid-cols-3 gap-8">
                    {
                        products.map(pd => <Product product={pd} key={pd.id} addToCart={addToCart} />)
                    }
                </div>
            </div>
            <aside className="cart-container fixed right-0 top-0 mt-20 w-64 h-full bg-lightYellow">
                <Cart cartItems={cartItems} />
            </aside>
        </section>
    );
};

export default Shop;