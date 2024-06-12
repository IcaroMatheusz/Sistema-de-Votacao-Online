const mysql = require('mysql2/promise');


const pool = mysql.createPool({
  host: '127.0.0.1',   // porta do banco de dados


  user: 'root',  // usuario do mysql


  password: 'admin', // senha do usuario do mysql


  database: 'teste',  // nome do banco de dados 


  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


module.exports = pool;
