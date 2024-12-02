const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'ctc',
    password: 'postgres',
    port: 5432, // PostgreSQL default port
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
