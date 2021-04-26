const express = require('express')
const {Router} = require('express');
const ToDoRouter = express.Router();




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

// GET

// POST

// PUT

// DELETE




module.exports = ToDoRouter;