
const { exec } = require('child_process');

const runcode =  (cmd) => {

    //executing the code
     exec(cmd, (err, stdout, stderr) => {
        if (err) {
          console.error(`exec error: ${err}`);
          return;
        }
      
        console.log(`output :  ${stdout}`);
        // res.send(stdout);
        return stdout;
      });
}

module.exports = runcode ;