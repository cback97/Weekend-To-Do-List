// Set up Express server / Establish body-parser 
const express = require('express')
const app = express();
const bodyParser = require(body-parser);
const PORT = 5000;
const ToDoRouter = require('./routes/todorouter.js');



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//ROUTE
app.use('/todos', ToDoRouter)

app.listen(PORT, () =>{
    console.log('Listening on Port', PORT)
})



