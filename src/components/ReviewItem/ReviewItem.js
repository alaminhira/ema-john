import React from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewItem = ({ product, removeItem }) => {
    const { id, img, name, price, quantity, shipping } = product;
    return (
        <div className='border p-3 flex items-center'>
            <img className='w-24' src={img} alt="" />
            <div className='flex-1 mx-4'>
                <h3 className='text-xl font-semibold mb-4'>{name}</h3>
                <h4>Price: {price * quantity}</h4>
                <h4>Quantity: {quantity}</h4>
                <h4>Shipping {shipping}</h4>
            </div>
            <button onClick={() => removeItem(id)} className='text-red-400 bg-red-200 w-12 h-12 rounded-full text-xl'>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;