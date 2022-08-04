'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Manga extends Model {
    
    };

    Manga.init({
        
        name: DataTypes.STRING,
        chapter: DataTypes.INTEGER,
        website: DataTypes.STRING,
        page: DataTypes.INTEGER,
        nameOfCh: DataTypes.STRING,
      }, {
        sequelize,
        underscored: true,
        modelName: 'Manga',
      });
      return Manga;
    };