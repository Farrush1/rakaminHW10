const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'homework10',
  password: 'talokan',
  port: 5432,
});

module.exports = pool;
