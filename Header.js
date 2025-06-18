import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const total = useSelector((state) => state.cart.totalQuantity);
  return (
    <header style={{ padding: '1rem', background: '#cce' }}>
      <nav>
        <Link to="/products">Products</Link> | {' '}
        <Link to="/cart">Cart 🛒({total})</Link>
      </nav>
    </header>
  );
};

export default Header;