module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: false
    },
    identificator: {
      type: DataTypes.INTEGER,
      allowNull: false, // 필수 입력
      unique: true
    },
    author: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    publisher: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    isbn: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: true,
    }
  }, {
    timestamps: true,
    paranoid: true,
    charset: 'utf8',
    collate: 'utf8_general_ci'
  })

  return Book
}