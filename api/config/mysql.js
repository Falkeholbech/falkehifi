const mysql = require('mysql2'); // mysql

module.exports = {
   connect: function () {
      return mysql.createConnection({
         host: '188.226.185.171',
         user: 'root',
         password: 'nqy57uwq',
         database: 'hifi'
      })
   }
}