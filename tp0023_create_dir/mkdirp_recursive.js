var mkdirp = require("mkdirp")
var path = require('path');
var filePath = path.join("subfolder1", "subfolder2", "subfolder3");

console.log("Going to create directory" + filePath);
mkdirp(filePath, function(err){
   if (err) {
       return console.error(err);
   }
   console.log("Directory created successfully!");
});