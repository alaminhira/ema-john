import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import formatTitle from '../../utilities/format';

const Product = ({product, addToCart}) => {
    const {img, name, price, ratings, seller} = product;
    return (
        <div className='product-item border-2 border-gray-300 rounded-lg flex flex-col justify-between overflow-hidden'>
            <div className="product-details p-1.5">
                <img className='rounded-lg' src={img} alt={name} />
                <h3 className='text-xl font-semibold my-2'>{formatTitle(name, 23)}</h3>
                <h4 className='text-base font-semibold'>Price: ${price}</h4>
                <p className='mt-10'><small>Manufacturer: {seller}</small></p>
                <p className='mb-2'><small>Ratting: {ratings} stars</small></p>
            </div>
            <button onClick={() => addToCart(product)} className='w-full text-center py-3 font-semibold bg-lightYellow hover:bg-lightOrange transition-all'>Add to Cart<FontAwesomeIcon icon={faCartPlus} className='ml-2' /></button>
        </div>
    );
};

export default Product;