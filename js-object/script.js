// // ArrowFunction
// const tampilNama = nama => {
//   return `hello, ${nama}`;
// };

// // Implisit Return
// const tampilNama1 = nama => `hello, ${nama}`
// // console.log(tampilNama1("Mukti DJ"));

// // 2 Parameter
// const tampilNama2 = (nama, waktu) => {
//   return `hello, ${nama} Selamat ${waktu}`;
// };

// // console.log(tampilNama2('Ayu Retno', 'Malam'))

// let child = ['Ibrahim Mukti', 'Sulleyman Mukti', 'Mutia Ayu']

// // console.log(child.map(children => children.length))
// // console.table(child.map(children => ({nama: children, longNama : children.length})))

// // Constructor Function
// const Mahasiswa = function() {
//   this.nama = 'Mukti DJ'
//   this.age = 21
//   this.sayHello = function()  {
//     // console.log(`Halo ${this.nama}, umur saya ${this.age}`);

//   }

// // Perbedaan arrow function dan function biasa pada setInterval akan mengacu pada windows
// // kalo arrow function akan mengacu pada lexical

// // setInterval(function() {
// //   console.log(this);

// // }, 1000);
// setInterval(() => {
//   console.log(this.age++);

// }, 4000);

// }

// const mukti = new Mahasiswa()

const box = document.querySelector('.box')
box.addEventListener('click', function() {
  this.classList.toggle('size')
  setTimeout(() => {
    this.classList.toggle('caption')
  }, 600);

})