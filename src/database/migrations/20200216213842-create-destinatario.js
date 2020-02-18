'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable(
        'destinatario', 
        { 
            id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              primaryKey: true
            },
            uniqueHashValue: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            name: {
              type: Sequelize.STRING,
              allowNull: false,
              
            },
            rua: { 
              type: Sequelize.STRING,
              allowNull: false,
            },
            numero: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            complemento: {
              type: Sequelize.STRING,
              allowNull: true,
            },
            estado: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            cidade: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            cep: {
              type: Sequelize.STRING,
              allowNull: false,
            },
        }
      );
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('destinatario');
    
  }
};
