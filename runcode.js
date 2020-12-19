
const { exec } = require('child_process');

const runcode = async (cmd) => {

    //executing the code
     exec(cmd, (err, stdout, stderr) => {
        if (err) {
          console.error(`exec error: ${err}`);
          return;
        }
      
        console.log(`output :  ${stdout}`);
        console.log("stdout jo return hoga",stdout)
        return stdout;
      });
}

module.exports = runcode ;