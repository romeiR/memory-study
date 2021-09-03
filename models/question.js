'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Question = loader.database.define(
  'questions',
  {
    questionId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    questionname: {
      type: Sequelize.STRING,
      allowNull: false
    },
  }
);

module.exports = Question;