// Connect to Database w/ Postgres
const pg = require('pg');
const url = require('url');

const config = {
    database: 'weekend-to-do-app',
    host: 'localhost',
    port: '5432',
    max: '10',
    idleTimeoutMillis: 30000,
}
const pool = new pg.Pool(config);

// Testing connection to DB
pool.on("connect", () => {
    console.log("connected to postgres");
});

pool.on("error", (err) => {
    console.log("Error connecting to postgres", err);
    process.exit(-1)
});


module.exports = pool;