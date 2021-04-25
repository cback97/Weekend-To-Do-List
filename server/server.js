const express = require('express')
const app = express();
const bodyParser = require(body-parser);
const PORT = 3000;


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.listen(PORT, () =>{
    console.log('Listening on Port', PORT)
})