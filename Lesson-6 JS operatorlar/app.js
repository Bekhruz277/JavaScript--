"use strict";

const a = 15,
    b = 20;

console.log(a+b); // ?  a = это 15; b = это 20; равно "35";

let incr = 55,
    decr = 55;

console.log(incr++); // ? Increment добавляет
console.log(decr--); // ? Decrement отнимает

console.log(incr);
console.log(decr);

const q = 15;
const n = 7;

console.log(q % n);

console.log(2 * 5 == '10');  // ? == Проверяет, значения; | Qiymatlarni tekshiradi
console.log(2 * 5 === '10'); // ? === Проверяет, тип информации | Molumat turi

let isChecked = true;
let isClose = true;

console.log(isChecked && isClose); // ? Две стороны равны = будет - true;

// ! && - это знак | и
// ! || - это знак | или