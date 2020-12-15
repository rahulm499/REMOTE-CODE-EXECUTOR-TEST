const { exec } = require('child_process');


const runcode = (lan,lancmd,ext) => {
    exec(lancmd + ' sample.'+ext, (err, stdout, stderr) => {
        if (err) {
          console.error(`exec error: ${err}`);
          return;
        }
      
        console.log(`output :  ${stdout}`);
      });
}
const lan="python++" ;
const lancmd="python" ;
const ext="py" ;
runcode(lan,lancmd,ext);
