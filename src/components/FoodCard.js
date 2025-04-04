import React from 'react';

function FoodCard({ food }) {
  return (
    <div className="food-card">
      <img src={require(`../assets/${food.image}`)} alt={food.name} className="food-image" />
      <h3>{food.name}</h3>
      <p>{food.category}</p>
      <p className="price">{food.price}</p>
      <button className="order-btn">Order Now</button>
    </div>
  );
}

export default FoodCard;
