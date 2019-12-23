//Object Literal
// const mahasiswa1 = {
//   nama: "Mukti DJ",
//   energi: 100,
//   useEnergi(makan) {
//     this.energi += makan;
//     return `hello ${this.nama}, Jaga Kesehatan`;
//   },
// };
// const mahasiswa2 = {
//   nama: "Ayu Retno",
//   energi: 100,
//   useEnergi(makan) {
//     this.energi += makan;
//     return `hello ${this.nama}, Jaga Kesehatan`;
//   },
// };
// console.log(mahasiswa2.useEnergi(10));
// console.log(mahasiswa2);

// function declaration yang lebih efektif
// const methodMahasiswa = {
//   addEnergi:function(makan) {
//     this.energi += makan;

//     console.log(`hello ${this.nama}, Jaga Kesehatan`);

//   },

//   minusEnergi:function(jam) {
//     this.energi -= jam;
//     console.log(`hello ${this.nama}, Main Terus`) ;

//   },

//   doubleEnergi:function(jam) {
//     this.energi += jam * 2;
//     console.log(`hello ${this.nama}, Tidur Terus`);

//   }
// }

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;


// }

// let ghost = Mahasiswa("Ghost", 10);
// console.log(ghost.doubleEnergi(5));
// console.log(ghost);

// console.log(ghost.minusEnergi(10));
// console.log(ghost);
// console.log(ghost.addEnergi(10));
// console.log(ghost);







// Constructrur Function , keyword new
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//   this.addEnergi = function(makan) {
//     this.energi += makan;
//     return `hello ${this.nama}, Jaga Kesehatan`;
//   };

//   this.minusEnergi = function(jam) {
//     this.energi -= jam;
//     return `hello ${this.nama}, Main Terus`;
//   };
// }

// let mukti = new Mahasiswa('mukti', 20)
// console.log(mukti.addEnergi(10));
// console.log(mukti.minusEnergi(5));
// console.log(mukti);


// Prototype
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi
// }

// Mahasiswa.prototype.makan = function(porsi) {
//   this.energi += porsi
//   return `Halo ${this.nama}, Selamat Makan`
// }

// Mahasiswa.prototype.main = function(jam) {
//   this.energi -= jam
//   return `Halo ${this.nama}, Jangan Main Terus`
// }

// Mahasiswa.prototype.tidur = function(jam) {
//   this.energi += jam * 2
//   return `Halo ${this.nama}, Selamat Tidur`
// }


// let Mukti = new Mahasiswa('Mukti', 10)


// Class

class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama
    this.energi = energi
  }

  makan(porsi) {
      this.energi += porsi
      return `Halo ${this.nama}, Selamat Makan`
    }

    main(jam) {
      this.energi -= jam
      return `Halo ${this.nama}, Jangan Main Terus`
    }

    tidur(jam) {
      this.energi += jam * 2
      return `Halo ${this.nama}, Selamat Tidur`
    }
}

let mukti = new Mahasiswa('Mukti', 5)


let angka = [43,11,40]
console.log(angka.sort());
