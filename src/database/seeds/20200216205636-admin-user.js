'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert(
        'user', 
        [
          {
            name: 'administrador',
            userType: '',
            email: 'admin@fastfeet',
            passHash: bcrypt.hashSync('cleiton'),
            created_at: new Date(),
            updated_at: new Date(),   
          }
        ], 
        {}
      );
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete(
        'user', 
        [
          {
            name: 'administrador',
            email: 'admin@fastfeet', 
          }
        ], 
        {}
      );
  }
};
