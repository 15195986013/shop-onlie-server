const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: 'nideshop',
  prefix: 'nideshop_',
  encoding: 'utf8mb4',
  host: 'localhost',
  // host: '118.190.147.56',
  port: '3306',
  user: 'root',
  password: '123456',
  dateStrings: true
};
