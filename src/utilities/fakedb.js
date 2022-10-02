const getFromDb = summary => {
    return JSON.parse(localStorage.getItem(summary)) || {};
}

const storeToDb = summary => {
    localStorage.setItem('cart-summary', JSON.stringify(summary));
}

export {getFromDb, storeToDb};