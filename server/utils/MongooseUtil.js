const mongoose = require('mongoose');
const MyConstants = require('./MyConstants');

const uri =
  'mongodb+srv://' +
  MyConstants.DB_USER + ':' +
  MyConstants.DB_PASS + '@' +
  MyConstants.DB_SERVER + '/' +
  MyConstants.DB_DATABASE;

mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
