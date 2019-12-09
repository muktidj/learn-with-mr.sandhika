const judul = document.getElementById("judul");
judul.innerHTML = "Hello Mukti";
judul.style.backgroundColor = "grey";
judul.style.color = "lightgreen";
judul.setAttribute("name", "MuktiDJ");

const ahref = document.querySelector("section#a a");
ahref.removeAttribute("href");

const p2 = document.querySelector(".p2");
p2.classList.add("label");

const p1 = document.querySelector('.p1')
p1.classList.remove('p1')

const p3 = document.querySelector('.p3')
p1.classList.toggle('p3')
