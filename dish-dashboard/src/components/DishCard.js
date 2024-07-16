import React from 'react';
import axios from 'axios';
import { useStateContext } from '../context/StateContext';

function DishCard({ dish }) {

  const {toggleDidChange} = useStateContext();

  const togglePublished = async () => {
    await axios.patch(`http://localhost:5000/api/dishes/${dish._id}/toggle`).then(() => {toggleDidChange()})
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={dish.imageUrl} alt={dish.dishName} className="w-full h-32 object-cover rounded-t-lg" />
      <h2 className="text-xl font-bold mt-2">{dish.dishName}</h2>
      <button
        className={`mt-2 px-4 py-2 rounded ${dish.isPublished ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}
        onClick={togglePublished}
      >
        {dish.isPublished ? 'Unpublish' : 'Publish'}
      </button>
    </div>
  );
}

export default DishCard;
