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
let jill = new Person({ firstName: 'Jill', lastName: 'Arnold', age: 59});
//jill.save();
let kelly = new Person({ firstName: 'Kelly', lastName: 'Arnold', age: 61});
//kelly.save();
//alternatively, to find and execute immediately - THIS IS COMMONLY USED:
Person.find({}, (err, people) => {
  if (err) {
    return console.error(err);
  }
  console.log(people);
});
//returns All people {} 
//returns specific info { age: 61 } or { name: 'Kelly' }



