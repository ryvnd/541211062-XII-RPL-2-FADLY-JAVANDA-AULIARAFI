// getting-started.js
const mongoose = require('mongoose');
const { connect } = require('../router/users');

const mongoDB = async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/praktikumkk4c');
    console.log('DB connected');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = mongoDB
