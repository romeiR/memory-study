'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Answer = loader.database.define(
  'answers',
  {
    answerId: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false
    },
    questionId: {
      type: Sequelize.UUID,
      allowNull: false
    },
    answername: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = Answer;