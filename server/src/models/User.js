module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    github_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    avatar_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    authorization: { // TODO: 써서 권한 있는지 없는지 확인도 해야됨
      type: DataTypes.ENUM('none', 'user', 'manager', 'god'),
      defaultValue: 'none',
      allowNull: false
    }
  }, {
    freezeTableName: true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })

  return User
}