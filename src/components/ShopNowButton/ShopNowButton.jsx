import React from 'react';
import { Link } from 'react-router-dom';
import './ShopNowButton.css';

const ShopNowButton = () => {
  return (
    <Link to="/products" className="btn bg-transparent hover:bg-transparent border-none">
      <b>
        <span>Achetez</span>
        <div className="liquid"></div>
      </b>
    </Link>
  );
};

export default ShopNowButton;
