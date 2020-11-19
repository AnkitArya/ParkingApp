const { DataTypes, Model } = require("sequelize");

class UserModel extends Model {}

module.exports = (sequelize) => {
  UserModel.init(
    {
      Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Address: {
        type: DataTypes.TEXT,
      },
      Status: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      CreatedDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      ModifiedDate: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize, // We need to pass the connection instance
      modelName: "UserDetail", // We need to choose the model name
    }
  );

  return UserModel;
};
