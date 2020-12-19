var fs = require("fs");
const handleFile =  {  

    writetofile : async (fName,data) => {
        fs.writeFile(fName,data, (err) => {
            if(err){
                console.log(err);
                return 0
            }
            console.log("sucessfully written to the file");
            return 1;
        });
    },
    deleteFile : (fName) =>{
        fs.unlink(fName, (err) => {
            if (err){
                throw err;
                return 0;
            } 
            // if no error, file has been deleted successfully
            console.log('File deleted!');
            return 1;
        });
    }

}

module.exports = handleFile ;
