const db = require("../models");

class UserService {
  static get() {
    return db.UserDetail.findAll();
  }
}

module.exports = UserService;
