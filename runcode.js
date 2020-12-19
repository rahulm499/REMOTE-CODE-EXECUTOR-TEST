
const { exec } = require('child_process');

const runcode = (cmd) => {

    //executing the code
    return new Promise(function(resolve, reject){
      exec(cmd, (err, stdout, stderr) => {
        if (err) {
          console.error(`exec error: ${err}`);
          reject(err);
        }
        
        console.log(`output :  ${stdout}`);
        console.log("stdout jo return hoga",stdout)
        resolve(stdout);
      });
    })
      
}

module.exports = runcode ;