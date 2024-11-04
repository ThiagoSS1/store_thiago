import { useState } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import './styles.css';

function Cart({count}) {
  // const [itemCount, setItemCount] = useState(0);

  return (
    <div className="navbar-actions">
      <div className='cart-icon'>
        <FaShoppingCart />
       <span className='item-count'>{count}</span>
      </div>

      <div className='header-user'>
        <FaUser />
        <span>Sign In</span>
      </div>
    </div>
  )
}

export default Cart;