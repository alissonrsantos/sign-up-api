const User = require('../models/User')

module.exports = {
  async index (request, response) {
    const user = await User.findAll() // Lista todos os dados / SELECT * FROM users
    return response.json(user)
  },

  async findById (request, response) {
    const { id } = request.params
    const user = await User.findAll({
      where: {
        id: id
      }
    }) // Lista todos os dados por Id / SELECT * FROM users

    return response.json(user)
  },

  async store (request, response) {
    const { name, birthDate, image } = request.body
    const user = await User.create({
      name, birthDate, image
    }) // Cria os dados / INSERT INTO
    return response.json(user)
  },

  async delete (request, response) {
    const { id } = request.params
    // eslint-disable-next-line no-unused-vars
    const user = await User.destroy({
      where: {
        id: id
      }
    })

    return response.json('Excluído com sucesso')
  },

  async update (request, response) {
    const { id, name, birthDate, image } = request.body
    const user = await User.update({
      id, name, birthDate, image
    }, {
      where: {
        id: id
      }
    }) // Atualiza os dados / UPDATE SET
    return response.json(user)
  }
}
