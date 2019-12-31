const x = document.querySelectorAll(".close");
const cards = document.querySelectorAll(".card");
const nama = document.querySelector('.nama')
const container = document.querySelector('.container')

container.addEventListener('click', (event) => {
    if(event.target.className === 'close') {
        event.target.parentElement.style.display = 'none'
        // Memanfaatkan event target sehingga kode lebih efektif
    }
    console.log(event.target)
    event.preventDefault()
})

// x.addEventListener("click", () => {
//   card.style.display = "none";
// });


// DOM TRAVERSAL
/*
for (let i = 0; i < x.length; i++) {
    x[i].addEventListener("click", (event) => {
        //x[i].parentElement.style.display = "none"; //menggunakan DOM Traversal
        //card[i].style.display = "none"; tidak menggunakan DOM Traversal
        event.target.parentElement.style.display = "none" //Cara yg lebih efektif
        console.log(event.target);

    })
}
Cara 1
*/

//cara 2
// x.forEach((el) => {
//     el.addEventListener('click', (event) => {
//         event.target.parentElement.style.display = 'none'
//         event.preventDefault()
//         event.stopPropagation() //berfungsi untuk menghentikan event Bubling
//         console.log(event.target);

//     })
// })

// Event BUBLING
// cards.forEach((card) => {
//     card.addEventListener('click', (event) => {
//         alert("I'am RUN!")
//     })
// })

// console.log(nama);
// console.log(nama.parentElement);
// console.log(nama.parentElement.parentElement);
// console.log(nama.nextElementSibling);
// console.log(nama.nextElementSibling.nextElementSibling);
// console.log(nama.previousElementSibling);
