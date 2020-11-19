const { DataTypes, Model } = require("sequelize");

class ParkedVehicleModel extends Model {}

module.exports = (sequelize) => {
  ParkedVehicleModel.init(
    {
      Id: {
        type: DataTypes.INTEGER,
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ParkingSlotId: {
        type: DataTypes.INTEGER,
        references: {
          model: "ParkingSlot",
          key: "Id",
        },
      },
      Fee: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      StartTime: {
        type: DataTypes.DATE,
      },
      EndTime: {
        type: DataTypes.DATE,
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
      modelName: "ParkedVehicle",
    }
  );

  return ParkedVehicleModel;
};
