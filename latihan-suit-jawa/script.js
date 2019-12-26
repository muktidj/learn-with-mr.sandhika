const playerGajah = document.querySelector('.gajah');
const playerOrang = document.querySelector('.orang');
const playerSemut = document.querySelector('.semut');

function getPilihanKomputer() {
    // menangkap pilihan computer
    // membangkitkan bilangan random
   const comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang'
    return 'semut';
    }

function  getHasil(comp, player) {
    if( player === comp ) return 'SERI!';
    if( player === 'gajah' ) return ( comp === 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player === 'orang' ) return ( comp === 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player === 'semut' ) return ( comp === 'orang' ) ? 'KALAH' : 'MENANG!';

}

function playerPilihGajah() {

    playerGajah.addEventListener('click', () => {
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPlayer = playerGajah.className
        const hasil = getHasil(pilihanKomputer, pilihanPlayer)
        const imgKomputer = document.querySelector('.img-komputer')
        imgKomputer.setAttribute('src', `img/${pilihanKomputer}.png`)
        const info = document.querySelector('.info ')
        info.innerHTML = hasil
        console.log('comp :' + pilihanKomputer);
        console.log('player :' + pilihanPlayer);
        console.log('hasil :' + hasil);

    })
}

function playerPilihOrang() {
    playerOrang.addEventListener('click', () => {
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPlayer = playerOrang.className
        const hasil = getHasil(pilihanKomputer, pilihanPlayer)
        const imgKomputer = document.querySelector('.img-komputer')
        imgKomputer.setAttribute('src', `img/${pilihanKomputer}.png`)
        const info = document.querySelector('.info ')
        info.innerHTML = hasil
        console.log('comp :' + pilihanKomputer);
        console.log('player :' + pilihanPlayer);
        console.log('hasil :' + hasil);

    })
}

function playerPilihSemut() {
    playerSemut.addEventListener('click', () => {
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPlayer = playerSemut.className
        const hasil = getHasil(pilihanKomputer, pilihanPlayer)
        const imgKomputer = document.querySelector('.img-komputer')
        imgKomputer.setAttribute('src', `img/${pilihanKomputer}.png`)
        const info = document.querySelector('.info ')
        info.innerHTML = hasil
        console.log('comp :' + pilihanKomputer);
        console.log('player :' + pilihanPlayer);
        console.log('hasil :' + hasil);
    })

}


playerPilihSemut()
playerPilihGajah()
playerPilihOrang()
