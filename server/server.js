// Set up Express server / Establish body-parser 
const express = require('express')
const app = express();
const bodyParser = require(body-parser);
const PORT = 5000;

// Connect to Database w/ Postgres

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.listen(PORT, () =>{
    console.log('Listening on Port', PORT)
})

// Connect to Database w/ Postgres
const pg = require('pg');
const pool = new pg.Pool(config)

const config = {
    database:'weekend-to-do-app',
    host: 'localhost',
    port: '5432',
    max: '10',
    idleTimeoutMillis: 30000,
}

