//DOM SELECTION
//document.getElementById()
const judul = document.getElementById("judul");
judul.style.color = "salmon";
judul.style.backgroundColor = "black";
judul.innerHTML = "Mukti DJ";

// document.getElementByTagName()
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightgreen";
}

// document.getElementByClassName() -> HTML Collection
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "Diubah dari JS";
p1[0].style.fontWeight = "bold"
p1[0].style.color = "black"
