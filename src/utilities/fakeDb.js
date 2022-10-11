const retriveFromDb = summary => {
    return JSON.parse(localStorage.getItem(summary)) || {};
}

const storeToDb = (id, quantity) => {
    const cart = retriveFromDb('shopping-cart');
    cart[id] = quantity;
    localStorage.setItem('shopping-cart', JSON.stringify(cart));
}

export {retriveFromDb, storeToDb};