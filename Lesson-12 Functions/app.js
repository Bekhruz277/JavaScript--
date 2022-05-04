"use strict";

let number = 8;
// * glabal ozgaruvchi
function getText() {

let numbers = 15;
console.log(numbers);

//  * ichki ozgaruvchi

getText()
console.log(number);
    //? это аргумент
    //?        |
    //?        |
        // ?  \|/
function calc(a, b) {
    return a + b
}
console.log(calc(10,8));

// ! Function Declaration
// * returenNumber() <--------------- это правильно
// ? Return
function returenNumber() {
    let number = 10;
    return  number;
}
// * returenNumber() 
const num = returenNumber();
console.log(num);
 // * returenNumber() <--------------- это и правильно

// ! Function Expression

//* funcExpr()   <--------------------- это не правильно

const funcExpr = function () {
    console.log(520);
};
// * funcExpr()   <--------------------- это правильно

// ! Array Function

const  arrFunc = (c, d) => c + d;

let plus = arrFunc(10,9);

console.log(plus);