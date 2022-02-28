'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Peliculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      sinopsis: {
        type: Sequelize.TEXT // TEXT //
      },
      adultos: {
        type: Sequelize.BOOLEAN
      },
      popularidad: {
        type: Sequelize.FLOAT
      },
      imagen: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Peliculas');
  }
};