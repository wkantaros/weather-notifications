let User = require('./user');

let users = {};
let next_id = 1; 

let addUser = (user) => {
    users[next_id] = user;
    next_id++;
}

let getUsers = () => users;

module.exports.getUsers = getUsers;
module.exports.addUser = addUser;

