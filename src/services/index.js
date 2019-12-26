const users = require('./users/users.service.js');
const dicts = require('./dicts/dicts.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(dicts);
};
