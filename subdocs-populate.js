//import mongoose library 
const mongoose = require('mongoose');

//connect mongoose to mongodb, local host and database we want to connect to 
mongoose.connect('mongodb://localhost/subdocs-populate');

const commentSchema = new mongoose.Schema({
  text: String,
  username: String,
});

const postSchema = new mongoose.Schema({
  text: String,
  username: String,
  //commentSchema is a sub-document, nested inside of a document called postSchema
  comments: [commentSchema],
});

const Post = mongoose.model('Post', postSchema);

let aPost = new Post({ text: 'hello world', username: 'Aaron'});

aPost.comments.push({ text: 'I like that', username: 'Bob'});

aPost.save((err, post) => {
  console.log(post);
});
//$ node subdocs-populate.js
// (node:30964) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `fa
// lse` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this ch
// ange. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
// (Use `node --trace-deprecation ...` to show where the warning was created)
// {
//   text: 'hello world',
//   username: 'Aaron',
//   _id: new ObjectId("63bc249b1cc2da7bb029a800"),
//   comments: [
//     {
//       text: 'I like that',
//       username: 'Bob',
//       _id: new ObjectId("63bc249b1cc2da7bb029a801")
//     }
//   ],
//   __v: 0
// }
