//import mongoose library 
const mongoose = require('mongoose');

//connect mongoose to mongodb, local host and database we want to connect to 
mongoose.connect('mongodb://localhost/peopleDB');

//initiate mongoose schema 
const Schema = mongoose.Schema;

//syntax for creating new schema
const personSchema = new Schema({
  id: Number,
  firstName: { type: String, required: true },
  lastName: String,
  age: { type: Number, required: true },
 });

const Person = mongoose.model('Person', personSchema);

let bob = new Person({ id: 1, firstName: 'Bob', lastName: 'Cohen', age: 39, updated_at: 2023-01-05, create_at: 2023-01-05 });

// bob.save((error, person) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(person);
//   }
// });

Person.findById('63b6faee5e060709f45df1ec', (err, person) => {
  if (err) throw err;

  person.firstName = 'Jimmy';

  person.save((err) => {
    if (err) throw err;
    else console.log('Person successfully updated!');
  });
});
//$ node person.js
// (node:15024) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `fa
// lse` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this ch
// ange. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
// (Use `node --trace-deprecation ...` to show where the warning was created)
// {
//   firstName: 'Bob',
//   lastName: 'Cohen',
//   age: 39,
//   _id: new ObjectId("63b71c54ba731234c73c3620"),
//   __v: 0
// }
// Person successfully updated!

