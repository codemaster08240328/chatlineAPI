'use strict';
module.exports = (sequelize, DataTypes) => {
  const Caller_hear = sequelize.define('Caller_hear', {
    Time: DataTypes.DATE,
    caller_uuid: DataTypes.STRING,
    hear_call_uuid: DataTypes.STRING
  }, {});
  Caller_hear.associate = function(models) {
    // associations can be defined here
  };
  return Caller_hear;
};