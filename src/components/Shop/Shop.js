import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    const addToCart = product => {
        const selectedProduct = cartItems.find(item => item.id === product.id);
        const restProducts = cartItems.filter(item => item.id !== product.id);

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