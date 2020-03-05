
const chalk = require('chalk');
let user = require('./user.js');

let c = require('./calcul.js');

//let Car = require('./car.ts');
//import {Car} from './car.ts';

console.log("Hi Step1");
console.log(chalk.blue("Hi Step1"));
user.display("Evening");

//car = new Car(1,"Audi A4",Car.Model.Audi);
//console.log(car);


console.log(c.calculate(2,3,4));

/*
const http = require("http");
http.createServer(function(request,response){
     
    response.end("Hello NodeJS!");
     
}).listen(3000, "127.0.0.1",function(){
    console.log("Сервер начал прослушивание запросов на порту 3000");
});
*/


