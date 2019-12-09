const judul = document.getElementById("judul");
judul.innerHTML = "Hello Mukti";
judul.style.backgroundColor = "grey";
judul.style.color = "lightgreen";
judul.setAttribute("name", "MuktiDJ");

const ahref = document.querySelector("section#a a");
ahref.removeAttribute('href')
