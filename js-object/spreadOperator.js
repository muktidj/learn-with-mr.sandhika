//Spread Operator
const nama = ['Putri Fia', 'Ayu Retno', 'Zulfa Dinda']

//console.log(...nama);
//memecah iterable menjadi single element

//Menggabungkan 2 array
const orang = [...nama] //Mengcopy-array
const dosen = ['Galih', 'lis', 'Noli']
//const result = [orang,dosen]
//const result = orang.concat(dosen)
const result = [...orang, 'Mukti', ...dosen]
//console.log(result);


const liMhs = document.querySelectorAll('.nama')
const mhsHtml = [...liMhs].map(mahasiswa => mahasiswa.textContent)
console.log(mhsHtml);


const personName = document.querySelector('.person')
const concatPersonName = [...personName.textContent].map(person => `<span>${person}</span>`).join('')
personName.innerHTML = concatPersonName
