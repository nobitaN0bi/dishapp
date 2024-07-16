import React, { useState } from 'react';
import axios from 'axios';

function DishForm() {
  const [dishName, setDishName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isPublished, setIsPublished] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  await axios.post('http://localhost:5000/api/dishes', { dishName, imageUrl, isPublished, shouldUpdate: false }).catch((e) => {window.alert(JSON.stringify(e.response.data))})
    setDishName('');
    setImageUrl('');
    setIsPublished(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block text-gray-700">Dish Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg"
          value={dishName}
          onChange={(e) => setDishName(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700">Image URL</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700">Published</label>
        <input
          type="checkbox"
          className="mr-2"
          checked={isPublished}
          onChange={(e) => setIsPublished(e.target.checked)}
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
        Add Dish
      </button>
    </form>
  );
}

export default DishForm;
