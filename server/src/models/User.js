module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    uid: {
      type: DataTypes.STRING(10),
      allowNull: false, // 필수 입력
      unique: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false // 필수 입력
    }
  }, {
    timestamps: true,
    paranoid: true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })

  return User
}