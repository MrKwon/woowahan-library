module.exports = (sequelize, DataTypes) => {
  const Serial = sequelize.define('Serial', {
    serial_no: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      unique: true,
    }
   }, {
    timestamps: true,
    paranoid: true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })

  return Book
}