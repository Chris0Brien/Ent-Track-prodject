'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Anime extends Model {
    
    };

    Anime.init({
      animeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
  
      },
        name: DataTypes.STRING,
        season: DataTypes.INTEGER,
        website: DataTypes.STRING,
        episode: DataTypes.INTEGER,
        nameOfEp: DataTypes.STRING,
      }, {
        sequelize,
        underscored: true,
        modelName: 'Anime',
      });
      return Anime;
    };