var fs = require("fs");
const handleFile =  {  

    writetofile : async (fName,data) => {
        return new Promise(function(resolve, reject) {
          fs.writeFile(fName,data, (err) => {
            if(err){
                console.log(err);
                resolve(err.message);
            }
            console.log("sucessfully written to the file");
            resolve(1);
        });
    }
        )
    }   ,
    deleteFile : async (fName) =>{
        return new Promise(function(resolve, reject){
            fs.unlink(fName, (err) => {
                if (err){
                    console.log(err);
                    reject(0);
                } 
                // if no error, file has been deleted successfully
                console.log('File deleted!');
                resolve(1);
            });
        })
       
    }

}

module.exports = handleFile ;