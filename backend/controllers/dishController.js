
const Dish = require('../models/Dish');

// Get all dishes
exports.getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find();
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
    res.status(500).json({ message: error.message });
  }
};
