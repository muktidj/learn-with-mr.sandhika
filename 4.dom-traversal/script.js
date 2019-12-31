const x = document.querySelectorAll(".close");
const card = document.querySelectorAll(".card");
const nama = document.querySelector('.nama')
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
x.forEach((el) => {
    el.addEventListener('click', (event) => {
        event.target.parentElement.style.display = 'none'
        console.log(event.target);

    })
})

console.log(nama);
console.log(nama.parentElement);
console.log(nama.parentElement.parentElement);
console.log(nama.nextElementSibling);
console.log(nama.nextElementSibling.nextElementSibling);
console.log(nama.previousElementSibling);
