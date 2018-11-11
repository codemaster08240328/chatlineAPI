'use strict';
module.exports = (sequelize, DataTypes) => {
  const Caller_Log = sequelize.define('Caller_Log', {
    Start_Time: DataTypes.DATE,
    End_Time: DataTypes.DATE,
    duration: DataTypes.INTEGER,
    caller_uuid: DataTypes.STRING,
    is_guy: DataTypes.BOOLEAN,
    caller_id: DataTypes.STRING,
    calling_num: DataTypes.STRING
  }, {});
  Caller_Log.associate = function(models) {
    // associations can be defined here
  };
  return Caller_Log;
};