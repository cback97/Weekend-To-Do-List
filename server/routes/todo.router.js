const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


// GET
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "todo-list" ORDER BY "id";'
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error getting to-do list', error);
        res.sendStatus(500);
    });
});

// POST
router.post('/', (req, res) => {
    let addTask = req.body;
    console.log('HERE IS THE new TASK', addTask);
    console.log('adding new task', addTask);
    let queryText = `INSERT INTO "todo-list" ("task")
                     VALUES ($1);`;
    pool.query(queryText, [addTask.task])
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('Error adding new task', error);
            res.sendStatus(500);
        })
});
// PUT
router.put('/:id', (req, res) => {
    let id= req.params.id;
    console.log(id);
    let queryText= `UPDATE "todo-list" SET "done" = 'true' WHERE "id" =$1;`;
    pool.query(queryText,[id])
    .then(response => {
        console.log('THIS TASK IS DONE', id);
        res.sendStatus(200);
    })
    .catch(error => {
        console.log('Error with completing task');
        res.sendStatus(500);
    })
})


// DELETE
router.delete('/:id', (req, res) => {
    let id= req.params.id;
    console.log(id);
    let queryText= `DELETE FROM "todo-list" WHERE "id" =$1;`;
    pool.query(queryText,[id])
    .then(response => {
        console.log('THIS TASK IS DELETED', id);
        res.sendStatus(200);
    })
    .catch(error => {
        console.log('Error with deleting task');
        res.sendStatus(500);
    })
})




module.exports = router;