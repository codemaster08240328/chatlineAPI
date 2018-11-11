'use strict';
module.exports = (sequelize, DataTypes) => {
  const p2p_call = sequelize.define('p2p_call', {
    Time: DataTypes.DATE,
    invite_sent_call_uuid: DataTypes.STRING,
    invite_to_call_uuid: DataTypes.STRING,
    is_accepted: DataTypes.BOOLEAN,
    call_start_on: DataTypes.DATE,
    call_end_on: DataTypes.DATE,
    duration: DataTypes.INTEGER
  }, {});
  p2p_call.associate = function(models) {
    // associations can be defined here
  };
  return p2p_call;
};