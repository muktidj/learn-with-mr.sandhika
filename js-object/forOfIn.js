//for..of

const nama = ['Mukti', 'Ayu Retno', 'Dinda']

/*
for (let index = 0; index < nama.length; index++) {
    console.log(nama[index]);
}
*/
/*
nama.forEach(name => {
console.log(name);
});
*/

/*
for (const names of nama) {
console.log(names);
}
*/

/*
nama.forEach((names, index) => {
    console.log(`${names} adalah nama ke ${index + 1}`);

})
*/

/*
for (const [index, names] of nama.entries()) {
    console.log(`${names} adalah nama ke ${index + 1}`);

}
*/

// Nodelist
//const liNama = document.querySelectorAll('.nama')
// liNama.forEach(nama => {
//    console.log(nama.innerHTML)
// })
/*
for (const nama of liNama) {
console.log(nama.textContent);
}
*/

// ARGUMENTS

function jumlahAngka() {
    let jumlah = 0
    for (const angka of arguments) {
    jumlah += angka
}
    return jumlah
}
console.log(jumlahAngka(1,2,3,4,5))

//for...in
const mhs = {
    nama: 'Mukti',
    umur: 21,
    wife: ['Ayu Retno', 'Zulfa Dinda']
}


for (const mahasiswa in mhs) {
    console.log(mhs[mahasiswa]);

}