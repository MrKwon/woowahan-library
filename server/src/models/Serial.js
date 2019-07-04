module.exports = (sequelize, DataTypes) => {
  const Serial = sequelize.define('Serial', {
    status: {
      type: DataTypes.ENUM('rent', 'hold'),
      allowNull: false,
      defaultValue: 'hold'
    }
   }, {
    timestamps: false,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })

  return Serial
}