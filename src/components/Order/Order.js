import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const products = useLoaderData();

    return (
        <div className='mt-24'>
            This is Order Page product count {products.length};
        </div>
    );
};

export default Order;