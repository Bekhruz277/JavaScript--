"use strict";
const person = {
    name: "Bekhruz", // * data-tupe = string 
    lastName: "Khodjaev",
    age:15, // * data-tupe = number
    wishes: [], // * Array
    language: function() {}, // * Function 
    family: {
        mather: "mam",
        father: 'dad',
    }
}; 
console.log(person);

const obj = {
    name: 'div',
    width: 400,
    height: 400,
    colors: { border: "black", bg: "red"}
}
// delete obj.colors
// console.log(obj);
console.log(Object.keys(obj).length)
let counter = 0;

for(let key in obj) {
    if(typeof obj[key] == "object") {
        for(let i in obj[key]) {
            console.log(`Property ${key} value : ${obj[key][i]}`);
            counter++
        }
    } else {
        console.log(`Property ${key} value : ${obj[key]}`);
        counter++
    }
};
console.log(counter);
// ! creation method || создание метод
const newMethod = {
    make: function() {
        console.log("Your firts Method)");   
    }
}
newMethod.make()

const options = {
    colors: {
        color: "red",
        bg: "black"
    }
}
const {bg,color} = options.colors
console.log(bg);
