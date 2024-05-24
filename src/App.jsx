//src./app.jsx

import React from 'react';
import './App.css';
import PriceCard  from './components/pricecard'

function App() {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>react price card</h1>
        <PriceCard 
          name="Product Name"
          price={29.99}
          description="This is a description of the product."
          onButtonClick={handleButtonClick}
        />
      </header>
    </div>
  );
}

export default App;