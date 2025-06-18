import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import plants from '../assets/plants';
import { addToCart } from '../redux/cartSlice';

const ProductListPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Available Plants</h2>
      {categories.map(category => (
        <div key={category}>
          <h3>{category}</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {plants.filter(p => p.category === category).map(plant => (
              <div key={plant.id} style={{ border: '1px solid gray', padding: '1rem' }}>
                <img src={plant.img} alt={plant.name} />
                <h4>{plant.name}</h4>
                <p>${plant.price}</p>
                <button
                  disabled={!!cartItems[plant.id]}
                  onClick={() => dispatch(addToCart(plant))}
                >
                  {cartItems[plant.id] ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListPage;