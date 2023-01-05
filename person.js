//import mongoose library 
const mongoose = require('mongoose');

//connect mongoose to mongodb, local host and database we want to connect to 
mongoose.connect('mongodb://localhost/peopleDB');

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

let query = Person.find();

query.exec().then(function (people) {
  console.log(people);
})

 
  // with just query, returns constructor only 
  //with query.exec, returns a pending promise 
  //let query = Person.find(), query.exec().then(functon (people) { console.log(people)})
  //will return all people from the people DB






