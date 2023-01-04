//import mongoose library 
const mongoose = require('mongoose');

//connect mongoose to mongodb, local host and database we want to connect to 
mongoose.connect('mongodb://localhost/beersDB');

//initiate mongoose schema 
const Schema = mongoose.Schema;

//syntax for creating new schema
const beerSchema = new Schema({
  name: String,
  abv: Number,
  style: String,
});

const Beer = mongoose.model('Beer', beerSchema);

let lager = new Beer({ name: 'Sam Adams', abv: 8.4, style: 'Lager' });
lager.save();
