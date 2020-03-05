import fs from 'fs';


let fileContent = fs.readFileSync("example.txt","utf8");
console.log(fileContent);

