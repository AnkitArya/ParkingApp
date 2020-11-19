const db = require("../models");

class ParkingService {
  static get() {
    return db.Parking.findAll();
  }

  static async create(parkingObj) {
    try {
      const result = await db.sequelize.transaction(async (t) => {
        const parking = await db.Parking.create(parkingObj, { transaction: t });
        const parkingSlot = {
          Code: 0,
          ParkingId: parking.Id,
        };
        for (let slot = 1; slot <= parkingObj.Slots; slot++) {
          parkingSlot.Code = "Code-" + slot;
          await db.ParkingSlot.create(parkingSlot, { transaction: t });
        }
        return parking;
      });
    } catch (error) {}
    return result;
  }
}

module.exports = ParkingService;
