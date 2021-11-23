const fs = require("fs");
const path ="./Files/";
fs.watch(path, function (event, filename) {
    
    if (event === 'change') {
        if(filename){
            console.log(filename + " has changed.");
            fs.readFile(path.concat(filename),(err,data)=>{
                if(err){
                    console.error(err);
                }else{
                    var filedata= data.toString();
                    console.log(filedata);
                } 
                
            });
        }else {
            console.log('filename not provided');
        }
    } 
});


