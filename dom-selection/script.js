//DOM SELECTION
//document.getElementById()
const judul = document.getElementById("judul");
judul.style.color = "salmon";
judul.style.backgroundColor = "black";
judul.innerHTML = "Mukti DJ";

// document.getElementByTagName()
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {

    p[i].style.backgroundColor = 'lightgreen'

}