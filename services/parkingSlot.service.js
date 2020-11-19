const db = require("../models");

class ParkingSlotService {
  static get() {
    return db.ParkingSlot.findAll();
  }
}

module.exports = ParkingService;
