
import React from 'react';
import './pricecard.css'; // For styling the component

const PriceCard = ({ name, price, description, onButtonClick }) => {
  return (
    <div className="price-card">
      <h2>react price task card </h2>
      <p>{description}</p>
      <div className="price">${price.toFixed(2)}</div>
      <button onClick={onButtonClick}>Button</button>
    </div>
  );
};

export default PriceCard;