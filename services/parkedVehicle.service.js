const db = require("../models");

class ParkedVehicleService {
  static get() {
    return db.ParkedVehicle.findAll();
  }

  static async create(parkedVehicleObj) {
    try {
      const result = db.sequelize.transaction(async (t) => {
        parkedVehicleObj.StartTime = new Date(Date.now());
        parkedVehicleObj.Fee = 0;
        const parkedVehicle = await db.ParkedVehicle.create(parkedVehicleObj, {
          transaction: t,
        });

        await db.ParkingSlot.update(
          { Status: 1 },
          {
            where: {
              Id: parkedVehicleObj.ParkingSlotId,
            },
            transaction: t,
          }
        );

        return parkedVehicle;
      });
    } catch (error) {}
    return result;
  }
}

module.exports = ParkedVehicleService;
