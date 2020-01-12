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

// const box = document.querySelector('.box')
// box.addEventListener('click', function() {
//   this.classList.toggle('size')
//   setTimeout(() => {
//     this.classList.toggle('caption')
//   }, 600);

// })

// Map, Reduce, filter
let angka = [-1, 2, -2, -3, -4, -5, -6, 4, 5, 7, 43];
// for
// for (let i = 0; i < angka.length; i++) {
//   if(angka[i] >= 3 ) {

//    newAngka.push(angka[i])
//    console.log(angka[i]);

//   }
// }
// console.log(newAngka);

//filter
// const newAngka = angka.filter((angkaYgDiFilter) => {
//   return angkaYgDiFilter >=3
// })
// console.log(newAngka);

// Map
// const newAngka = angka.map((angkaYGDikali => angkaYGDikali * 2))
// console.log(angka)
// console.log(newAngka);

// reduce
// const newAngka = angka.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// })
// console.log(newAngka);

// Method Chaining
const hasilSemua = angka
  .filter(angkaYgDifilter => angkaYgDifilter >= 5)
  .map(angkaYgDikali => angkaYgDikali * 10)
  .reduce((acc, cur) => acc + cur);
console.log(hasilSemua);

// HTML Fragments
// const mhs = {
//   nama : 'Mukti DJ',
//   nim : 1612501120,
//   umur : 21,
//   email : 'muktidwijatmoko@gmail.com'
// }
// const element = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <h3>${mhs.nim}</h3>
// </div>`

// document.body.innerHTML = element

//HTML Fragments dan Embeded Expression
// const mhs = [
//   {
//     nama: "Mukti DJ",
//     nim: 1612501120,
//   },
//   {
//     nama: "Zulfa Dinda",
//     nim: 1612501121,
//   },
//   {
//     nama: "Ayu Retno",
//     nim: 1612501122,
//   },
// ];

// const element = `<div class="mhs">
// ${mhs.map(mahasiswa => `<ul>
//   <li>${mahasiswa.nama}</li>
//   <li>${mahasiswa.nim}</li>
// </ul>`).join('')}
// </div>`

// HTML Fragments && Nested
const mahasiswa = {
  nama : "Mukti",
  semester : 7,
  matakul : ['Pemweb', 'Moprog', 'Algorithma', 'Statistik EKonomi']
}

const cetakMatkul = (matakul) => {
return (
  `<ol>
    ${matakul.map(mk => `<li>${mk}</li>`).join('')}
  </ol>`
)
}

const element = `<div class="mhs">
  <h2>${mahasiswa.nama}</h2>
  <h3>${mahasiswa.semester}</h3>
  <h4>Mata Kuliah:</h4>
  ${cetakMatkul(mahasiswa.matakul)}
</div>`

document.body.innerHTML = element
