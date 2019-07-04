module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define('Request', {
    img_url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    author: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    publisher: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    isbn: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    desc: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '내용 없음'
    }
  }, {
    timestamps: true,
    paranoid: true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })

  return Request
}