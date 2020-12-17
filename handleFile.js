var fs = require("fs");
const handleFile =  {  

    writetofile : (fName,data) => {
        fs.writeFile(fName,data, (err) => {
            if(err)console.log(err);
            console.log("sucessfully written to the file");
        });
    },
    deleteFile : (fName) =>{
        fs.unlink(fName, (err) => {
            if (err) throw err;
            // if no error, file has been deleted successfully
            console.log('File deleted!');l
        });
    }

}

module.exports = handleFile ;
