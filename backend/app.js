
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dishRoutes = require('./routes/dishRoutes');
const { mongoURI } = require('./config');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', dishRoutes);

// Connect to MongoDB
mongoose.connect(mongoURI).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

module.exports = app;
