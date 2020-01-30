//callback Sychronous

// function hello(name) {
//     alert(`hello, ${name}`)
// }
/*
function tampilkanHello(callback) {
    const name = prompt(`Masukan Nama : `)
    callback(name)
}

tampilkanHello(name => alert(`Hello, ${name}`))
*/
/*
const mahasiswa = [
  {
    name: "Mukti DJ",
    age: 21,
  },
  {
    name: "Zulfa Dinda",
    age: 21,
  },
  {
    name: "Ayu Retno",
    age: 21,
  },
];

console.log('Mulai');

mahasiswa.forEach(mhs => {
    for (let i = 0; i < 1000000; i++) {
        let date = new Date();

    }
    console.log(mhs.name)
})

console.log(`selesai`);
*/


//async callback
function getDataMahasiswa(url, success, error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.response)

            } else if(xhr.status === 404) {
                error();

            }
        }
    }
    xhr.open('get', url)
    xhr.send()
}

console.log('Mulai');

getDataMahasiswa('data/mahasiswa.json', (result)=> {
    console.log(JSON.parse(result));
}, () => {})
console.log('Selesai');
