"use strict";

const arr = [1,2,3,4]

// arr.unshift('hello')
arr.shift()
console.log(arr);


// ! ----------------- Massivga qoshish va olish || Array add and end remove

// * arr.pop() ------ remove
// * arr.push(5) ----- add

// console.log(arr)

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for(let val of arr) {
//     console.log(arr);
// }
// ! ================= forEach ================= 
// const colors = ["black", "red", "crimson"];

// colors.forEach(function (item,index, arr) {
//     console.log(item, index, arr);
// })


const questions = prompt("", "");
const answers = questions.split(",")
console.log(answers);
console.log(answers.join("."));