const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init (sequelize) {
    super.init({
      name: DataTypes.STRING,
      birthDate: DataTypes.DATE,
      image: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = User
