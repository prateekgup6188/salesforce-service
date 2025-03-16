const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "Prateek@18806",
  port: 5432,
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;