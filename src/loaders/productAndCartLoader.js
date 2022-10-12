import { retriveFromDb } from "../utilities/fakeDb";

export const productAndCartLoader = async () => {
    // get products
    const res = await fetch('products.json');
    const products = await res.json();

    const cart = retriveFromDb('shopping-cart');

    // get cart
    const initialCart = []; 
    if (products.length) {
        for (const id in cart) {
            const product = products.find(pd =>  pd.id === id);
            product.quantity = cart[id];
            initialCart.push(product);
        }
    }

    return { products, initialCart };
}