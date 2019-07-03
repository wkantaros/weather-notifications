module.exports = {
  createUser ({ number }) {
    console.log(`Add user with phone number ${number}`);
    return Promise.resolve();
  }
}