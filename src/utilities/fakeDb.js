const retriveFromDb = key => {
    return JSON.parse(localStorage.getItem(key)) || {};
}

const storeToDb = (productId, quantity) => {
    const cart = retriveFromDb('shopping-cart');

    cart[productId] = quantity;
    localStorage.setItem('shopping-cart', JSON.stringify(cart));
}

export {retriveFromDb, storeToDb};