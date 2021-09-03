'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Score = loader.database.define(
  'scores',
  {
    scoreOf: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    scorevalue: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Score;