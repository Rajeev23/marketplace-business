
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

let pool = new Pool({
  // connectionString: process.env.DATABASE_URL
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'rajeev23cusat',
  port: 5432,
});

const connect = async() => {
  try {
    pool = await pool.connect();
    if(pool) {
      console.log('database connected');
    }
  } catch(err) {
    console.log(`error while connecting to database: ${err}`);
  }
}

/**
 * Create Tables
 */
const createTables = () => {
  const queryText =
    `CREATE TABLE IF NOT EXISTS
      contactus(
        id SERIAL PRIMARY KEY,
        name VARCHAR(128) NOT NULL,
        email VARCHAR(128) NOT NULL,
		phone VARCHAR(128) NOT NULL,
		message VARCHAR(128) NOT NULL,
        created_date TIMESTAMP,
        modified_date TIMESTAMP
      )`;

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      // pool.end();
    })
    .catch((err) => {
      console.log(err);
      // pool.end();
    });
}

const executeQuery = async (query) => {
  try {
    const res = await pool.query(query);
    if (res) {
          return res;
    }
  } catch(err) {
      console.log(err);
      // pool.end();
  };
}

module.exports = {
    connect,
	createTables,
	executeQuery
};