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
ToDoRouter.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "todo-list" ORDER BY "id";'
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error getting to-do list', error);
        res.sendStatus(500);
    });
});

// POST

// PUT

// DELETE




module.exports = ToDoRouter;