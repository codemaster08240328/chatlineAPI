'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('Caller_Logs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Start_Time: {
        type: Sequelize.DATE
      },
      End_Time: {
        type: Sequelize.DATE
      },
      duration: {
        type: Sequelize.INTEGER
      },
      caller_uuid: {
        type: Sequelize.STRING
      },
      is_guy: {
        type: Sequelize.BOOLEAN
      },
      caller_id: {
        type: Sequelize.STRING
      },
      calling_num: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Caller_Logs'),
};