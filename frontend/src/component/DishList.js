
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DishItem from './DishItem';

const DishList = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      const response = await axios.get('http://localhost:5000/api/dishes');
      setDishes(response.data);
    };
    fetchDishes();
  }, []);

  return (
    <div>
      <h1>Dish List</h1>
      {dishes.map(dish => (
        <DishItem key={dish._id} dish={dish} />
      ))}
    </div>
  );
};

export default DishList;
