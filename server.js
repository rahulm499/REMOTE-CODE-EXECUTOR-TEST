var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/run', function (req, res) {

   const { exec } = require('child_process');
    //function for running the code
   const runcode = async (lan) => {
       //dictionary for language to language command to run its code
       var lancmd = {
           python : ["python "],
           javascript : ["node "]
       };
       //dictionary for file extension
       var ext = {
        python : ["py"],
        javascript : ["js"]
    };
    //file name -- like-- sample.py
       fName = "sample."+ext[lan];
    //writing code recived from body to a file 
       fs.writeFile(fName,req.body.code, (err) => {
           if(err)console.log(err);
           console.log("sucessfully written to the file");
       });
       //executing the code
       await exec(lancmd[lan] + fName, (err, stdout, stderr) => {
           if (err) {
             console.error(`exec error: ${err}`);
             return;
           }
         
           console.log(`output :  ${stdout}`);
           res.send(stdout);
         });

        //deleting the file
        //  fs.unlink(fName, (err) => {
        //     if (err) throw err;
        //     // if no error, file has been deleted successfully
        //     console.log('File deleted!');
        // });
   }
   let lan=req.body.lang ;
   runcode(lan);
})



const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server up and running on port ${port} !`));