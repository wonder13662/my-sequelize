const { Sequelize } = require('sequelize');

(() => {
  // Example for postgres
  const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')
})


