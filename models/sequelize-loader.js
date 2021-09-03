'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/memory_study'
);

module.exports = {
  database: sequelize,
  Sequelize: Sequelize
};