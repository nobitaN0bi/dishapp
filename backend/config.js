
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  mongoURI: process.env.DATABASE_URI,
  port: process.env.PORT || 5000
};
