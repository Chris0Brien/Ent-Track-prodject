'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Movies extends Model {
    
    };

    Movies.init({
        
        name: DataTypes.STRING,
        website: DataTypes.STRING,
        sequel: DataTypes.STRING,
        time: DataTypes.INTEGER
      }, {
        sequelize,
        underscored: true,
        modelName: 'Movies',
      });
      return Movies;
    };