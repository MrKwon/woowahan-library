module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    authorization: { // TODO: 써서 권한 있는지 없는지 확인도 해야됨
      type: DataTypes.ENUM('none', 'user', 'manager', 'god'),
      defaultValue: 'none',
      allowNull: false
    }
  }, {
    timestamps: true,
    paranoid: true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })

  return User
}