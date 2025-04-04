import React from 'react';
import FoodList from './components/FoodList';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Food Delivery App</h1>
      </header>
      <FoodList />
    </div>
  );
}

export default App;
