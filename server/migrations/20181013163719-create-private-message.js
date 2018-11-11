'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('private_messages', {
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
      message_uuid: {
        type: Sequelize.STRING
      },
      is_heard: {
        type: Sequelize.BOOLEAN
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('private_messages'),
};