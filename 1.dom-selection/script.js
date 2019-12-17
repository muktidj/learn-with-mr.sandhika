/*
//DOM SELECTION
//document.getElementById()
const judul = document.getElementById("judul");
judul.style.color = "salmon";
judul.style.backgroundColor = "black";
judul.innerHTML = "Mukti DJ";

// document.getElementByTagName()
const p = document.getElementsByTagName("p");
for (let i = 0; i < 3; i++) {
  p[i].style.backgroundColor = "lightgreen";
}

// document.getElementByClassName() -> HTML Collection
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "Diubah dari JS";
p1[0].style.fontWeight = "bold";
p1[0].style.color = "black";

// document.querySelector() -> Element
const p4 = document.querySelector("#b p");
p4.style.backgroundColor = "salmon";

const li2 = document.querySelector('section#b ul li:nth-child(2)')
li2.style.backgroundColor = "purple"
li2.style.fontWeight = "bold"
li2.style.color = "black";

*/

// document.querySelectorAll() -> nodeList
// const p = document.querySelectorAll('p')
// for(let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = "salmon"
//     p[i].style.fontWeight = "bold"
//     p[i].style.color = "red"

// }

// node Root
const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')
p4.style.backgroundColor = "red"