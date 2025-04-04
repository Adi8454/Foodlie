import React from 'react';
import FoodCard from './FoodCard';

const foodItems = [
  { id: 1, name: "Biryani", category: "Non-Veg", image: "biryani.jpg", price: "$10" },
  { id: 2, name: "Chocolates", category: "Dessert", image: "chocolates.jpg", price: "$5" },
  { id: 3, name: "Burger", category: "Non-Veg", image: "burger.jpg", price: "$7" },
  { id: 4, name: "Pizza", category: "Veg", image: "pizza.jpg", price: "$8" },
  { id: 5, name: "Salad", category: "Veg", image: "salad.jpg", price: "$6" },
];

function FoodList() {
  return (
    <div className="food-list">
      {foodItems.map(item => (
        <FoodCard key={item.id} food={item} />
      ))}
    </div>
  );
}

export default FoodList;
