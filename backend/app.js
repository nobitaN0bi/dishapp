
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dishRoutes = require('./routes/dishRoutes');
const { mongoURI } = require('./config');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', dishRoutes);

mongoose.connect(mongoURI).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

module.exports = app;
