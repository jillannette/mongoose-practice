//import mongoose library 
const mongoose = require('mongoose');

//initiate mongoose schema 
const Schema = mongoose.Schema;

//syntax for creating new schema
const personSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
});

const Person = mongoose.model('Person', personSchema);

let david = new Person({ firstName: 'David', lastName: 'Smith', age: 25 });
console.log(david);
//jilla@MyYoga MINGW64 ~/mongoose-practice (main)
//$ node person.js
// {
//   firstName: 'David',
//   lastName: 'Smith',
//   age: 25,
//   _id: new ObjectId("63b59520e204f5d3c10bc7db")
// }
