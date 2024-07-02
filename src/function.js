"use strict";
// Function declaration
function sapa(nama) {
    console.log("Halo, aku" + nama);
}
sapa("Yasir!");
function calculate(a, b, c) {
    return a + b + c;
}
let hasil = calculate(3, 5, 1);
console.log("Hasil Penjumlahan: " + hasil);
// Arrow function
let multiplication = (x, y) => {
    return x * y;
}; //=> =tidak usah memanggil function
let result = multiplication(9, 8);
console.log("Hasil perkalian: " + result);
// exercase
// 1
const cube = function (num) {
    return num ** 3;
};
console.log(cube(3));
// 2
function greet(nama) {
    console.log("Hello, aku" + nama);
}
sapa("Idris Mulet!");
// 3
let multiply = (a, b) => {
    return a * b;
};
let kali = multiply(6, 9);
console.log("Hasil Perkalian, " + kali);
// exercase
// Object
let person2;
person2 = {
    name: "Yasir Rizqi",
    age: 20,
    address: "Tegal"
};
console.log(person2);
