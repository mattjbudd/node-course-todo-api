const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const User = require('./../server/models/user').User;

// Todo.remove({}).then((result) => {
//   console.log(result)
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id: 5c0954b6ad7e7204e2fe177d}).then((todo) => {

});

Todo.findByIdAndRemove('5c0954b6ad7e7204e2fe177d').then((todo) => {
  console.log(todo);
});
