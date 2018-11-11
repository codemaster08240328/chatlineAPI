'use strict';
module.exports = (sequelize, DataTypes) => {
  const Caller_conference = sequelize.define('Caller_conference', {
    Start_Time: DataTypes.DATE,
    End_Time: DataTypes.DATE,
    is_guy_room: DataTypes.BOOLEAN,
    caller_uuid: DataTypes.STRING,
    room_num: DataTypes.INTEGER
  }, {});
  Caller_conference.associate = function(models) {
    // associations can be defined here
  };
  return Caller_conference;
};