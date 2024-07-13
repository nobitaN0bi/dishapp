
import React from 'react';
import axios from 'axios';

const DishItem = ({ dish }) => {
  const togglePublished = async () => {
    await axios.patch(`http://localhost:5000/api/dishes/${dish._id}/toggle`);
    window.location.reload();
  };

  return (
    <div>
      <h2>{dish.dishName}</h2>
      <img src={dish.imageUrl} alt={dish.dishName} />
      <p>Published: {dish.isPublished.toString()}</p>
      <button onClick={togglePublished}>
        {dish.isPublished ? 'Unpublish' : 'Publish'}
      </button>
    </div>
  );
};

export default DishItem;
