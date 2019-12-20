//Object Literal
const mahasiswa1 = {
  nama: "Mukti DJ",
  energi: 100,
  useEnergi(makan) {
    this.energi += makan;
    return `hello ${this.nama}, Jaga Kesehatan`;
  },
};
const mahasiswa2 = {
  nama: "Ayu Retno",
  energi: 100,
  useEnergi(makan) {
    this.energi += makan;
    return `hello ${this.nama}, Jaga Kesehatan`;
  },
};
// console.log(mahasiswa2.useEnergi(10));
// console.log(mahasiswa2);

// function declaration
function Mahasiswa(nama, energi) {
  const mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  mahasiswa.addEnergi = function(makan) {
    this.energi += makan;
    return `hello ${this.nama}, Jaga Kesehatan`;
  }

  mahasiswa.minusEnergi = function(jam) {
      this.energi -= jam
      return `hello ${this.nama}, Main Terus`;
  }

  return mahasiswa;
}

// let ghost = Mahasiswa("Ghost", 10);
// console.log(ghost.addEnergi(5));
// console.log(ghost);
// let boy = Mahasiswa("boy", 10);
// console.log(boy.minusEnergi(5));
// console.log(boy);


// Constructrur Function , keyword new
function Mahasiswa(nama, energi) {
   this.nama = nama;
   this.energi = energi;
   this.addEnergi = function(makan) {
      this.energi += makan;
      return `hello ${this.nama}, Jaga Kesehatan`;
    }

   this.minusEnergi = function(jam) {
        this.energi -= jam
        return `hello ${this.nama}, Main Terus`;
    }

  }

  let mukti = new Mahasiswa('mukti', 20)
  console.log(mukti.addEnergi(10));
  console.log(mukti.minusEnergi(5));
  console.log(mukti);
