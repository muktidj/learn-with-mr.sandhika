// ArrowFunction
const tampilNama = nama => {
  return `hello, ${nama}`;
};

// Implisit Return
const tampilNama1 = nama => `hello, ${nama}`
// console.log(tampilNama1("Mukti DJ"));

// 2 Parameter
const tampilNama2 = (nama, waktu) => {
  return `hello, ${nama} Selamat ${waktu}`;
};

// console.log(tampilNama2('Ayu Retno', 'Malam'))

let child = ['Ibrahim Mukti', 'Sulleyman Mukti', 'Mutia Ayu']

// console.log(child.map(children => children.length))
console.table(child.map(children => ({nama: children, longNama : children.length})))
