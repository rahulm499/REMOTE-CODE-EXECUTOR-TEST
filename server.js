var express = require('express');
var app = express();
const path = require('path');

var fs = require("fs");
var bodyParser = require('body-parser');
var createFile = require('./createFile');
var runcode = require('./runcode');
const { check } = require('express-validator');

//Templating Engine

app.set('view engine', 'ejs');
app.set('views', 'views');

//Static Middleware (To send CSS files linked with HTML)
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res)=>{
   res.render('home');
})

app.post('/run', async function (req, res) {
   let lan=req.body.lang ;
   let code=req.body.code ;
   console.log(req.body);
   const output = await createFile(lan,code);
   res.render('output',{
      output: output
   });
   
})

app.get('/run', (req, res)=>{
   res.render('output',{
      output: 'Error 404 Page Not Found'
   })
})



const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server up and running on port ${port} !`));