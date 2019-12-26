//Closure
// function init() {
//   // let nama = 'Mukti'
//   return function(nama) {
//     console.log(nama);

//   }

// }

// let panggilNama = init()
// panggilNama('Ayu')
// panggilNama('Retno')


// const ucapkanSalam = (waktu) => {
//   return (nama) => {
//     console.log(`Halo ${nama}, good ${waktu}. Have Nice Day`);

//   }
// }

// const goodMorning = ucapkanSalam('Morning')
// const goodAfternoon = ucapkanSalam('Afternoon')
// const goodNight = ucapkanSalam('Night')

// goodMorning('Mukti')
// goodAfternoon('Dwi')
// goodNight('Jatmoko')

// console.dir(goodNight())



let add = (() => {
  let counter = 0
  return function() {
    return ++counter;
  }
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());

// let a = add()
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());
