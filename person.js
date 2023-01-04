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
//david.save();

let query = Person.find();
//Person.find() will return a pending promise only 

//must use exec on the query and .then to return the executed promise - will return all people
//in the collection
// 

//alternatively, to find and execute immediately - THIS IS COMMONLY USED:
Person.find((error, result) => {
  if (error) {
    return console.error(error);
  }
  console.log(result);
});
//returns the person object 



