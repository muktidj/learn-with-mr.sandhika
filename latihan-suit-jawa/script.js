const playerGajah = document.querySelector(".gajah");
const playerOrang = document.querySelector(".orang");
const playerSemut = document.querySelector(".semut");

function getPilihanKomputer() {
  // menangkap pilihan computer
  // membangkitkan bilangan random
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player === comp) return "SERI!";
  if (player === "gajah") return comp === "orang" ? "MENANG!" : "KALAH!";
  if (player === "orang") return comp === "gajah" ? "KALAH!" : "MENANG!";
  if (player === "semut") return comp === "orang" ? "KALAH" : "MENANG!";
}

function putar() {
  const imgKomputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "orang", "semut"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgKomputer.setAttribute("src", `img/${gambar[i++]}.png`);
    if (i === gambar.length) i = 0;
  }, 100);
}

const pilihanBanyak = document.querySelectorAll("li img");
pilihanBanyak.forEach(pilihan => {
  pilihan.addEventListener("click", () => {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pilihan.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);

    putar();

    setTimeout(() => {
      const imgKomputer = document.querySelector(".img-komputer");
      imgKomputer.setAttribute("src", `img/${pilihanKomputer}.png`);
      const info = document.querySelector(".info ");
      info.innerHTML = hasil;
      console.log("comp :" + pilihanKomputer);
      console.log("player :" + pilihanPlayer);
      console.log("hasil :" + hasil);
    }, 1000);
  });
});

// function playerPilihGajah() {
//   playerGajah.addEventListener("click", () => {
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = playerGajah.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
//     const imgKomputer = document.querySelector(".img-komputer");
//     imgKomputer.setAttribute("src", `img/${pilihanKomputer}.png`);
//     const info = document.querySelector(".info ");
//     info.innerHTML = hasil;
//     console.log("comp :" + pilihanKomputer);
//     console.log("player :" + pilihanPlayer);
//     console.log("hasil :" + hasil);
//   });
// }

// function playerPilihOrang() {
//     playerOrang.addEventListener('click', () => {
//         const pilihanKomputer = getPilihanKomputer();
//         const pilihanPlayer = playerOrang.className
//         const hasil = getHasil(pilihanKomputer, pilihanPlayer)
//         const imgKomputer = document.querySelector('.img-komputer')
//         imgKomputer.setAttribute('src', `img/${pilihanKomputer}.png`)
//         const info = document.querySelector('.info ')
//         info.innerHTML = hasil
//         console.log('comp :' + pilihanKomputer);
//         console.log('player :' + pilihanPlayer);
//         console.log('hasil :' + hasil);

//     })
// }

// function playerPilihSemut() {
//     playerSemut.addEventListener('click', () => {
//         const pilihanKomputer = getPilihanKomputer();
//         const pilihanPlayer = playerSemut.className
//         const hasil = getHasil(pilihanKomputer, pilihanPlayer)
//         const imgKomputer = document.querySelector('.img-komputer')
//         imgKomputer.setAttribute('src', `img/${pilihanKomputer}.png`)
//         const info = document.querySelector('.info ')
//         info.innerHTML = hasil
//         console.log('comp :' + pilihanKomputer);
//         console.log('player :' + pilihanPlayer);
//         console.log('hasil :' + hasil);
//     })

// }

// playerPilihSemut()
// playerPilihGajah()
// playerPilihOrang()
