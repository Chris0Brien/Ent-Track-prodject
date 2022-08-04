'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Anime extends Model {
    
    };

    Anime.init({
        
        name: DataTypes.STRING,
        season: DataTypes.INTEGER,
        website: DataTypes.STRING,
        episode: DataTypes.INTEGER,
        nameOfEp: DataTypes.STRING,
        time: DataTypes.INTEGER
      }, {
        sequelize,
        underscored: true,
        modelName: 'Anime',
      });
      return Anime;
    };