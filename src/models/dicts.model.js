// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;

module.exports = function(app) {
  const sequelizeClient = app.get("sequelizeClient");
  const dicts = sequelizeClient.define(
    "dict",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      value: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      remark: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      utime: {
        type: DataTypes.STRING,
        allowNull: true
      },
      ctime: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      timestamps: false,
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      }
    }
  );

  // eslint-disable-next-line no-unused-vars
  dicts.associate = function(models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return dicts;
};
