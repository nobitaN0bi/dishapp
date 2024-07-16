import React, { useState, useEffect } from 'react';
import DishList from './components/DishList';
import DishForm from './components/DishForm';
import { useStateContext } from './context/StateContext';
import axios from 'axios';


function App() {
  const [dishes, setDishes] = useState([]);
  const {didChange} = useStateContext();

  useEffect(() => {
    const fetchDishes = async () => {
      const response = await axios.get('http://localhost:5000/api/dishes');
      const data = response.data
      setDishes(data);
    };

    fetchDishes();
  }, [didChange]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dish Dashboard</h1>
      <DishForm />
      <DishList dishes={dishes} />
    </div>
  );
}

export default App;
