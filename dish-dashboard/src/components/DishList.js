import React from 'react';
import DishCard from './DishCard';

function DishList({ dishes }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {dishes.filter(dish => dish.isPublished).map(dish => (
        <DishCard key={dish._id} dish={dish} />
      ))}
    </div>
  );
}

export default DishList;
