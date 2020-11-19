const { DataTypes, Model } = require("sequelize");

class ParkingModel extends Model {}

module.exports = (sequelize) => {
  ParkingModel.init(
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
      Description: {
        type: DataTypes.TEXT,
      },
      Slots: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      Minutes: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      CreatorId: {
        type: DataTypes.INTEGER,
        references: {
          model: "UserDetail",
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
      modelName: "Parking",
    }
  );

  return ParkingModel;
};
