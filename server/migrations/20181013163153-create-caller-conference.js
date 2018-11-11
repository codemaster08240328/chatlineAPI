'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Caller_conferences', {
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
      is_guy_room: {
        type: Sequelize.BOOLEAN
      },
      caller_uuid: {
        type: Sequelize.STRING
      },
      room_num: {
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Caller_conferences'),
};