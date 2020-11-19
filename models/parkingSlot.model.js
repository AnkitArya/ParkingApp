const { DataTypes, Model } = require("sequelize");

class ParkingSlotModel extends Model {}

module.exports = (sequelize) => {
  ParkingSlotModel.init(
    {
      Id: {
        type: DataTypes.INTEGER,
      },
      Code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ParkingId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Parking",
          key: "Id",
        },
      },
      Status: {
        type: DataTypes.INTEGER,
      },
      CreatedDate: {
        type: DataTypes.DATE,
      },
      ModifiedDate: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "ParkingSlot",
    }
  );

  return ParkingSlotModel;
};
