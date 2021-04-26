const express = require('express')
const {Router} = require('express');
const ToDoRouter = express.Router();




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
ToDoRouter.post('/', (req, res) => {
    let newTask = req.body;
    console.log('adding new task', newTask);
    let queryText = `INSERT INTO "todo-list" ("task")
                     VALUES ($1);`;
    pool.query(queryText, [newTask.task])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('Error adding new task', error);
            res.sendStatus(500);
        })
});
// PUT

// DELETE




module.exports = ToDoRouter;