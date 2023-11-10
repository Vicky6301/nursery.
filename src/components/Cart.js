import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/Cart.css';

const Cart = ({ cartItems, onRemoveItem }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => onRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: ${calculateTotal()}</p>
        <Link to="/payment">Checkout</Link> {/* Use Link to navigate to the Payment page */}
      </div>
      <div>
        <h6 className='footer'></h6>
      </div>
    </div>

  );
};

export default Cart;
