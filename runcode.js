const { exec } = require('child_process');

const runcode = (cmd) => {

    //executing the code
    return new Promise(function(resolve, reject){
      exec(cmd, (err, stdout, stderr) => {
        if (err) {
          console.error(`exec error: ${err.message}`);
          //console.log("errorrr yaha tk tha")
          resolve('Invalid Code');
        }
        else {
          console.log(`output :  ${stdout}`);
        resolve(stdout);
        }
        
      });
    })
      
}

module.exports = runcode ;