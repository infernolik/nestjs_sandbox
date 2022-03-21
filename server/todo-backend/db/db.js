const mongoose = require('mongoose');

module.exports = function connectDB() {
  try {
    mongoose.connect(
      'mongodb+srv://russel:520011@mern-contact.yepen.mongodb.net/nestjsSandbox?retryWrites=true&w=majority',
    );
    console.log('We are in DB BOYZ');
  } catch (err) {
    console.log('Failed to connect to DB');
    process.exit(1);
  }
};
