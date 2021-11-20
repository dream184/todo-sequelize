'use strict';
const bcrypt = require('bcryptjs')
const SEED_USER = {
  name: 'root',
  email: 'root@example.com',
  password: '12345678'
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      let userId = await queryInterface.bulkInsert('Users', [{
        name: SEED_USER.name,
        email: SEED_USER.email,
        password: bcrypt.hashSync(SEED_USER.password, bcrypt.genSaltSync(10), null),
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})
      
      async function createTodos(userId) {
        try {
          await queryInterface.bulkInsert('Todos',
            Array.from({ length: 10 }).map((_, i) =>
            ({
              name: `name-${i}`,
              UserId: userId,
              createdAt: new Date(),
              updatedAt: new Date()
            })
            ), {})
        } catch (e) {
          console.warn(e)
        }
      }
      createTodos(userId)
    } catch (e) {
      console.warn(e)
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Todos', null, {})
    await queryInterface.bulkDelete('Users', null, {})
  }
};
