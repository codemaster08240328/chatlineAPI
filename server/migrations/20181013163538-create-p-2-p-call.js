'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('p2p_calls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Time: {
        type: Sequelize.DATE
      },
      invite_sent_call_uuid: {
        type: Sequelize.STRING
      },
      invite_to_call_uuid: {
        type: Sequelize.STRING
      },
      is_accepted: {
        type: Sequelize.BOOLEAN
      },
      call_start_on: {
        type: Sequelize.DATE
      },
      call_end_on: {
        type: Sequelize.DATE
      },
      duration: {
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('p2p_calls'),
  
};