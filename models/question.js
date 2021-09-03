'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Question = loader.database.define(
  'questions',
  {
    questionId: {
      type: Sequelize.UUID,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    questionname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    questionTen: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    questionHandred: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  }
);

module.exports = Question;