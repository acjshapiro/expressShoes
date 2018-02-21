'use strict';
module.exports = (sequelize, DataTypes) => {
  var Shoe = sequelize.define('Shoe', {
    model: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Shoe.associate = function(models) {
    // associations can be defined here
  };
  return Shoe;
};