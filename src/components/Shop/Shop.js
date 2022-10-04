import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
<<<<<<< HEAD
=======
    const [cartSummary, setCartSummary] = useState({});
>>>>>>> 2efdd421dbb0d6ef2fcca380331069641e250236

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

<<<<<<< HEAD
=======
    // useEffect(() => {
    //     calcSummary(cartItems);
    // }, [cartItems])

    // const calcSummary = newCart => {
    //     const summary = newCart.reduce((acc, cur) => {
    //         acc.selectedItems += cur.quantity;
    //         acc.totalCost += (cur.price * cur.quantity);
    //         acc.shippingCost += (cur.shipping * cur.quantity);
    //         acc.tax = +(acc.totalCost * 0.1).toFixed(2);
    //         acc.grandTotal = acc.totalCost + acc.shippingCost + acc.tax;
    
    //         return acc;
    //     }, {
    //         selectedItems: 0, 
    //         totalCost: 0, 
    //         shippingCost: 0, 
    //         tax: 0,
    //         grandTotal: 0
    //     });

    //     setCartSummary(summary);
    // }

>>>>>>> 2efdd421dbb0d6ef2fcca380331069641e250236

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
<<<<<<< HEAD
                <Cart cartItems={cartItems} />
=======
                <Cart cartItems={cartItems} cartSummary={cartSummary} setCartSummary={setCartSummary} />
>>>>>>> 2efdd421dbb0d6ef2fcca380331069641e250236
            </aside>
        </section>
    );
};

export default Shop;