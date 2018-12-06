const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const User = require('./../server/models/user').User;

var id = '5c085eb5d32c98a413905c9d';
if (!ObjectID.isValid(id)) {
  return console.log('ID not valid');
}

User.findById(id).then((user) => {
  if(!user) {
    return console.log('ID not found');
  }
  console.log(user);
}).catch((e) => console.log(e));
