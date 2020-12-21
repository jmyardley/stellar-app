module.exports = function(sequelize, DataTypes) {
  const Appointment = sequelize.define("Appointment", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 20]
      }
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 20]
      }
    },

    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
  return Appointment;
};
