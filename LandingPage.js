import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundImage: 'url(https://via.placeholder.com/600x200)', padding: '2rem', textAlign: 'center' }}>
      <h1>Green Bliss Co.</h1>
      <p>Welcome to Green Bliss Co., your one-stop shop for healthy houseplants!</p>
      <button onClick={() => navigate('/products')}>Get Started</button>
    </div>
  );
};

export default LandingPage;