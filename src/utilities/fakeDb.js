const retriveFromDb = summary => {
    return JSON.parse(localStorage.getItem(summary)) || {};
}

const storeToDb = (id, quantity) => {
    const cart = retriveFromDb('shopping-cart');
    cart[id] = quantity;
    localStorage.setItem('shopping-cart', JSON.stringify(cart));
}

const removeFromDb = id => {
    const cart = retriveFromDb('shopping-cart');
    delete cart[id];
    console.log(cart);
    localStorage.setItem('shopping-cart', JSON.stringify(cart));
}

export {retriveFromDb, storeToDb, removeFromDb};