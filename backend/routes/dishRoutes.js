
const express = require('express');
const router = express.Router();
const { getAllDishes, togglePublished } = require('../controllers/dishController');

router.get('/dishes', getAllDishes);
router.patch('/dishes/:id/toggle', togglePublished);

module.exports = router;



