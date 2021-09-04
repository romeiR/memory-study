'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Question = loader.database.define(
  'questions',
  {
    questionid: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },
    questionname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    questionten: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    questionhandred: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    questionanswer: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = Question;