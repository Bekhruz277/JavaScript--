"use strict";
// let a = 8,
//     b = a;
//     console.log(b+3);

// const bmw = {
//     color: "red",
//     isBay: false
// };

// const mers = bmw;
// mers.color = "white"

// console.log(mers);
// console.log(bmw);

// function copyObj(obj) {
//     let objCopy = {};
//     for(let key in obj){
//         objCopy[key] = obj[key]
//     }
//     return objCopy;
// }

// const nexiaR3 = {
//     color: "red",
//     isBay: false
// };
// const spark = copyObj(nexiaR3);
// spark.color = "crimson";
// console.log(spark);
// console.log(nexiaR3);


// ! ================================ assign прбавляет методы

// const nexia2 = {
//     color: "red",
//     isBay: true
// };

// const extro = {
//     shum:100
// }
// console.log(Object.assign(nexia2, extro));

// const newCar = Object.assign({}, nexia2)
// nexia2.isBay = false;
// console.log(nexia2);
// console.log(newCar);

// const arr = [1,2,3,4];
// const newArr = arr.slice(arr)

// newArr[1] = 55

// console.log(arr);
// console.log(newArr);

// const cars = ['bmw', 'mers', 'nexia','gentra'],
//     plane = ["German", "UzAirways", "Turkish"],
//     thechnalogi = [...cars, ...plane, "matisz"];

    // ! ... это - Спрет оператр дабавляет методи

// console.log(thechnalogi);

// function num(a,b,...f){
//     console.log(a,b,f )
// }
// num(1,2,3,4,5,6,7)

// function func(a,b,c,){
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// const numbers = [1,2,3]
// func(...numbers)
