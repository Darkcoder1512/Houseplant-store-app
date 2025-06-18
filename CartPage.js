import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, remove } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalItems = Object.values(items).reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = Object.values(items).reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost}</p>
      {Object.values(items).map(item => (
        <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <img src={item.img} alt={item.name} width="50" />
          <div>
            <h4>{item.name}</h4>
            <p>${item.price} each</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(increment(item.id))}>+</button>
            <button onClick={() => dispatch(decrement(item.id))}>-</button>
            <button onClick={() => dispatch(remove(item.id))}>Delete</button>
          </div>
        </div>
      ))}
      <button onClick={() => alert('Coming Soon!')}>Checkout</button>
      <button onClick={() => navigate('/products')}>Continue Shopping</button>
    </div>
  );
};

export default CartPage;