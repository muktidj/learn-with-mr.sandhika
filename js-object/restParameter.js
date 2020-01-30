//Rest Parameter

function angka(/*a, ...all*/) {

//return all
return Array.from(arguments)
//return a
}

console.log(angka(1,2,3,4,5));


function jumAngka(...number) {
    return number.reduce((a,b) => a+b)
}

console.log(jumAngka(1,2,3,4,5));


//Array Destructring
const myWife = ['Ayu Retno', 'Zulfa Dinda', 'Fia'];
const [istriTua, ...istriMuda] = myWife
console.log(istriMuda.join(' & '));

// Object Destructring
const myFamily = {
    padre: 'Suwarto',
    madre: 'Warsilah',
    figlio1: 'Bayu',
    figlio2: 'Mukti'
}

const {padre,madre, ...figlio}= myFamily
console.log(figlio);


function filterBy(type, ...values) {
   return values.filter(value => typeof value === type)
}

console.log(filterBy('boolean', 1,2,3, false,true, 'Mukti', 'Dinda'));
