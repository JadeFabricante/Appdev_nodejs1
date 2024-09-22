const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const routes = require('./routes/router');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', routes);

app.listen(3000, ()=>{
    console.log('sever initialized on http://localhost:3000');
});