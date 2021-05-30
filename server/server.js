// Set up Express server / Establish body-parser 
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
// const PORT = 5000;
const ToDoRouter = require('./routes/todo.router.js');
// const pool = require('./modules/pool.js')

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//ROUTE
app.use('/todos', ToDoRouter)

app.listen(PORT, () =>{
    console.log('Listening on Port', PORT)
})

//heroku pg:push your_database DATABASE_URL


//heroku addons:create heroku-postgresql:hobby-dev

//heroku pg:push your_database DATABASE_URL
