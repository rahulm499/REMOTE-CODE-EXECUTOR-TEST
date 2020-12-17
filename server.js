var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var createFile = require('./createFile');
var runcode = require('./runcode');


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/run', function (req, res) {
   let lan=req.body.lang ;
   let code=req.body.code ;
   const output = createFile(lan,code);
   console.log(output)
   res.send(output);
   
})



const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server up and running on port ${port} !`));