const Dish = require('../models/Dish');
const { v4: uuidv4 } = require('uuid');

// Get all dishes

// Get all dishes
exports.getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find({ isPublished: true });
    res.json(dishes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Toggle published status
exports.togglePublished = async (req, res) => {
  try {
    const { id } = req.params;
    const dish = await Dish.findById(id);
    if (!dish) {
      return res.status(404).json({ message: 'Dish not found' });
    }
    dish.isPublished = !dish.isPublished;
    await dish.save();
    res.json(dish);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
};

/*
// Toggle published status
exports.togglePublished = async (req, res) => {
  try {
    const { id } = req.params;
    const dish = await Dish.findOne({ dishId: id });
    if (!dish) {
      return res.status(404).json({ message: 'Dish not found' });
    }
    dish.isPublished = !dish.isPublished;
    await dish.save();
    const io = req.app.get('socketio');
    io.emit('dishUpdated', dish);
    res.json(dish);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
*/


// Add or update dish
exports.addOrUpdateDish = async (req, res) => {
  try {
    const { dishName, imageUrl, isPublished, shouldUpdate } = req.body;
    const existingDish = await Dish.findOne({ dishName });
    if (existingDish && !shouldUpdate) {
      return res.status(400).json({ message: 'A dish with the same name already exists' });
    }
    let dish = existingDish;
    if (dish) {
      dish.imageUrl = imageUrl;
      dish.isPublished = isPublished;
    } else {
      dish = new Dish({ dishName, imageUrl, isPublished });
    }
    await dish.save();
    res.json(dish);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
