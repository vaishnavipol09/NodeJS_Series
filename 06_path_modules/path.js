const path = require("path");
//console.log(path.dirname("E:/NodeJS_Series/06_path_modules/path.js"));


//console.log(path.extname("E:/NodeJS_Series/06_path_modules/path.js"));


//console.log(path.basename("E:/NodeJS_Series/06_path_modules/path.js"));



//console.log(path.parse("E:/NodeJS_Series/06_path_modules/path.js"));

const pathName = path.parse("E:/NodeJS_Series/06_path_modules/path.js")
console.log(pathName.name);