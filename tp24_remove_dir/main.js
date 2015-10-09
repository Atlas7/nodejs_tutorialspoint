var fs = require("fs");

console.log("Going to delete directory ./tmp/tmp1/");
fs.rmdir("./tmp/tmp1",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("Going to read directory ./tmp/");
   fs.readdir("./tmp/",function(err, files){
      if (err) {
          return console.error(err);
      }
      files.forEach( function (file){
          console.log( file );
      });
   });
});