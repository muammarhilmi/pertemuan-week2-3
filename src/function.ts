// Function declaration
function sapa(nama:string){
    console.log("Halo, aku" + nama);
}
sapa("Yasir!")

function calculate (a:number, b:number, c:number) :number{
    return a + b + c
}
let hasil : number = calculate(3, 5, 1)
console.log("Hasil Penjumlahan: " + hasil);

// Arrow function
let multiplication = (x:number, y:number) => {
    return x * y
} //=> =tidak usah memanggil function

let result = multiplication(9,8)
console.log("Hasil perkalian: "+ result);

// // exercase
// // 1
// const cube = function(num:number){
//     return num ** 3
// }
// console.log(cube(3));
 
// // 2
// function greet(nama:string){
//     console.log("Hello, aku" + nama);
// }
// sapa("Idris Mulet!")

// // 3
// let multiply = (a:number, b:number) => {
//     return a * b
// }
// let kali = multiply(6,9)
// console.log("Hasil Perkalian, "+ kali);

// // exercase

// Object
let person2 : {
    name: string,
    age: number,
    address: string
}
person2 = {
    name : "Yasir Rizqi",
    age: 20,
    address: "Tegal"
}
console.log(person2);
