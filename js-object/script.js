/*2 Fase pada Execution Context
1. Creation
2.Execution

2.1 Execution Context, Hoisting && Scope
*/

// console.log(nama);
// var nama = "Mukti";

// Creation Phase pada Global Context
// Nyari apakah ada keyword variabel, kalo ada dia membuat nama variabel di set 'undefined'
// nama function = fn()
//hoisitng
// itu yang terjadi pada Executian Context

// Exucution Phase

//  var nama = 'Mukti'
//  var age = 21

//  console.log(sayHello());

//  function sayHello() {
//   return `WOI ${nama}, umur saya ${age}`
//  }


// function membuat local execution context
// yg didalamnya terdapat creation dan execution window
//arguments
//hoisting

// Scope


// var nama = 'Mukti'
// var age = 21

// function gabungNama() {
//   console.log(arguments);

//   let introduce = 'perkenalkan'
//   return `${introduce}, nama saya ${nama}. Umur saya ${age}`
// }

// console.log(gabungNama('Ayu Retno'));


// function a() {
//   console.log('Ini A');

//   function b() {
//     console.log('Ini B');

//     function c() {
//       console.log('Ini C');

//     }
//     c()
//   }
//   b()
// }
// a()

// Hoisting && Scope
function satu() {
  var nama = "ghost"
  console.log(nama);

}

function dua() {
  console.log(nama);

}

console.log(nama);
var nama = "Ayu"
satu()
dua('dinda')
console.log(nama);
