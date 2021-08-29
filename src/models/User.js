const { Model, DataTypes } = require('sequelize')
const { v4 } = require('uuid')

class User extends Model {
  static init (sequelize) {
    super.init({
      name: DataTypes.STRING,
      birthDate: DataTypes.STRING,
      image: DataTypes.STRING
    }, {
      sequelize
    })
    // eslint-disable-next-line no-return-assign
    User.beforeCreate(user => user.id = v4())

    return User
  }
}

module.exports = User
