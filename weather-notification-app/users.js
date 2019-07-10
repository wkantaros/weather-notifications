let users = [];
let next_id = 1; 

class User {
    constructor(phoneNumber, zipCode) {
        this.phoneNumber = phoneNumber;
        this.zipCode = zipCode;
        this.id = next_id;
    }
}

let addUser = (user) => {
    users.push(user);
    next_id++;
}

let getUsers = () => users;

module.exports = {
    User: User
}
module.exports.getUsers = getUsers;
module.exports.addUser = addUser;

