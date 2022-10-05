import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { retriveFromDb, storeToDb } from '../../utilities/fakeDb';
=======
>>>>>>> 7d70db1c64dd1c0a5293bcbdcb20064c51e210e7
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
<<<<<<< HEAD
=======
    const [cartSummary, setCartSummary] = useState({});
>>>>>>> 7d70db1c64dd1c0a5293bcbdcb20064c51e210e7

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

<<<<<<< HEAD
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

=======
>>>>>>> 7d70db1c64dd1c0a5293bcbdcb20064c51e210e7
    const addToCart = product => {
        const selectedProduct = cartItems.find(item => item.id === product.id);
        const restProducts = cartItems.filter(item => item.id !== product.id);

<<<<<<< HEAD
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

=======
        let newCart;
        if (!selectedProduct) {
            product.quantity = 1;
            newCart = [...restProducts, product];
        
        } else {
            selectedProduct.quantity++;
            newCart = [...restProducts, selectedProduct];
        }

        setCartItems(newCart);
    }


>>>>>>> 7d70db1c64dd1c0a5293bcbdcb20064c51e210e7
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
<<<<<<< HEAD
=======
                <Cart cartItems={cartItems} cartSummary={cartSummary} setCartSummary={setCartSummary} />
>>>>>>> 7d70db1c64dd1c0a5293bcbdcb20064c51e210e7
            </aside>
        </section>
    );
};

export default Shop;