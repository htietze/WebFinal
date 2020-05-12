'use strict';
module.exports = (sequelize, DataTypes) => {
  const States = sequelize.define('States', {
    name: DataTypes.STRING,
    visited: DataTypes.BOOLEAN,
    lat: DataTypes.FLOAT,
    lon: DataTypes.FLOAT,
    zoom: DataTypes.INTEGER
  }, {});
  States.associate = function(models) {
    // associations can be defined here
  };
  return States;
};