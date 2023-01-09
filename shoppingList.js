const mongoose = require('mongoose');

//does it matter what the path name is?  mongoose-practice, subdocs, etc??
mongoose.connect('mongodb://localhost/mongoose-practice');

const itemSchema = new mongoose.Schema({
  item: String,
  brand: String,
  quantity: Number,
});

const listSchema = new mongoose.Schema({
  store: String,
  items: [itemSchema]
});

const List = mongoose.model('List', listSchema);

let addList = new List({ store: 'Whole Fooods' });

addList.items.push({ item: 'Cookies', brand: 'Oreos', quantity: 1 });

addList.save((err, list) => {
  console.log(list)
});
//$ node shoppingList.js
// (node:20960) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `fa
// lse` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this ch
// ange. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
// (Use `node --trace-deprecation ...` to show where the warning was created)
// {
//   store: 'Whole Fooods',
//   _id: new ObjectId("63bc2da6f47173f6f9a55fdc"),
//   items: [
//     {
//       item: 'Cookies',
//       brand: 'Oreos',
//       quantity: 1,
//       _id: new ObjectId("63bc2da6f47173f6f9a55fdd")
//     }
//   ],
//   __v: 0
// }



