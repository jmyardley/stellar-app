module.exports = function(sequelize, DataTypes) {
  const Appointment = sequelize.define("Appointment", {
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
  Appointment.associate = function(models) {
    Appointment.belongsTo(models.User);
  };
  return Appointment;
};
