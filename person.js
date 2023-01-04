//import mongoose library 
const mongoose = require('mongoose');

//initiate mongoose schema 
const Schema = mongoose.Schema;

//syntax for creating new schema
const personSchema = new Schema({
  firstName: String,
  lastname: String,
  age: Number,
});

