/*
let ditepati = false
const janji1 = new Promise((resolve, reject) => {
    if(ditepati) {
        resolve("Janji Ditepati")
    } else {
        reject("Ingkar Janji")
    }
})

janji1
    .then(response => console.log(`OKE : ${response}`))
    .catch(response => console.log(`NOT OK : ${response}`))
*/

/*
let ditepati = false;
const janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve("Ditepati tapi  sesuai dengan waktunya");
    }, 3000);
  } else {
    setTimeout(() => {
      reject("Tidak ditepati tapi sesuai dengan waktunya");
    }, 3000);
  }
});

console.log("Mulai");
janji2
  .finally(() => console.log("Selesai Menunggu"))
  .then(response => console.log(`OK : ${response}`))
  .catch(response => console.log(`Not OK : ${response}`));
console.log("Selesai");
*/

const cuaca = new Promise(resolve => {
  setTimeout(() => {
    resolve([
      {
        kota: "Bogor",
        tempt: 26,
        kondisi: "Terik",
      },
    ]);
  }, 500);
});

const film = new Promise(resolve => {
  setTimeout(() => {
    resolve([
      {
        judul: "SPiderman",
        actor: "Mukti",
        rating: 8.9,
      },
    ]);
  }, 600);
});

Promise.all([cuaca, film]).then(response => {
  const [cuaca, film] = response;

  console.log(cuaca);
  console.log(film);
});
