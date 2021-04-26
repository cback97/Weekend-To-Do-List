// Connect to Database w/ Postgres
const pg = require('pg');
const pool = new pg.Pool(config)

const config = {
    database: 'weekend-to-do-app',
    host: 'localhost',
    port: '5432',
    max: '10',
    idleTimeoutMillis: 30000,
}

// Testing connection to DB
pool.on("connect", () => {
    console.log("connected to postgres");
});

pool.on("error", (err) => {
    console.log("Error connecting to postgres", err);
});
