import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Cart = ({cartItems}) => {

    let totalCost = 0,
        shippingCost = 0,
        tax = 0,
        grandTotal = 0,
        selectedItems = 0;

    cartItems.forEach(product => {
        totalCost += (product.price * product.quantity);
        shippingCost += product.shipping;
        tax = +(totalCost * 0.1).toFixed(2);
        grandTotal = totalCost + shippingCost + tax;
        selectedItems += product.quantity;
    })

    return (
        <div className='cart w-full px-5 py-10'>
            <h3 className='text-2xl font-semibold mb-20'>Order Summary</h3>
            <div className='text-lg space-y-4'>
                <p>Selected Items: {selectedItems}</p>
                <p>Total Price: {totalCost}</p>
                <p>Total Shipping Charge: {shippingCost}</p>
                <p>Tax: {tax}</p>
                <h4 className='text-xl font-semibold'>Grand Total: {grandTotal}</h4>
            </div>
            <div className='mt-10'>
                <button className='w-full bg-bloodRed py-2 text-white rounded-md'>
                    <span className='mr-2'>Clear Cart</span>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
                <button className='w-full bg-lightOrange py-2 text-white rounded-md mt-4'>
                    <span className='mr-2'>Review Order</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default Cart;