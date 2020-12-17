var handleFile = require("./handleFile");
var runcode = require('./runcode');


const createFile = (lan,code) => {
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

    handleFile.writetofile(fName,code);
    console.log("write k baad")
    let out = runcode(runcmd);
    return out;

}

module.exports = createFile ;

