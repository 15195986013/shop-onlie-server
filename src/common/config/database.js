const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: 'nideshop',
  prefix: 'nideshop_',
  encoding: 'utf8mb4',
  host: 'localhost', // 本地
  // host: '118.190.147.56',// 远程地址
  port: '3306',
  user: 'root',
  password: '123456',
  dateStrings: true
};
