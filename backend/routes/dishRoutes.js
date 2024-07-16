
const express = require('express');
const router = express.Router();
const { getAllDishes, togglePublished, addOrUpdateDish } = require('../controllers/dishController');

router.get('/dishes', getAllDishes);
router.patch('/dishes/:id/toggle', togglePublished);
router.post('/dishes', addOrUpdateDish);

module.exports = router;
