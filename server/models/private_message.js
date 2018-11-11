'use strict';
module.exports = (sequelize, DataTypes) => {
  const private_message = sequelize.define('private_message', {
    Time: DataTypes.DATE,
    invite_sent_call_uuid: DataTypes.STRING,
    invite_to_call_uuid: DataTypes.STRING,
    message_uuid: DataTypes.STRING,
    is_heard: DataTypes.BOOLEAN
  }, {});
  private_message.associate = function(models) {
    // associations can be defined here
  };
  return private_message;
};