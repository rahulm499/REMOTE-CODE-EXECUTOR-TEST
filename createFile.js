var handleFile = require("./handleFile");
var runcode = require('./runcode');


const createFile = async (lan,code) => {
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
    const fName = "sample."+ext[lan];

    //command to run the code
    const runcmd = lancmd[lan] + fName ;

    let temp = await handleFile.writetofile(fName,code);

    console.log("temp= ",temp)
    let val = await runcode(runcmd);
    console.log("val = ",val)
    return val;
}

module.exports = createFile ;

