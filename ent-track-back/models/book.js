'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Books extends Model {
    
    };

    Books.init({
        
        name: DataTypes.STRING,
        chapter: DataTypes.INTEGER,
        website: DataTypes.STRING,
        page: DataTypes.INTEGER,
        nameOfCh: DataTypes.STRING,
      }, {
        sequelize,
        underscored: true,
        modelName: 'Books',
      });
      return Books;
    };