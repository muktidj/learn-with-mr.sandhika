const judul = document.getElementById("judul");
judul.innerHTML = "Hello Mukti";
judul.style.backgroundColor = "grey";
judul.style.color = "lightgreen";
judul.setAttribute("name", "MuktiDJ");

const ahref = document.querySelector("section#a a");
// ahref.removeAttribute("href");


const p2 = document.querySelector(".p2");
p2.classList.add("label");

const p1 = document.querySelector('.p1')
p1.classList.remove('p1')

const p3 = document.querySelector('.p3')
p1.classList.toggle('p3')


// Create Element && Create Text Node
const newParagraph = document.createElement('p')
const textNewParagraph = document.createTextNode('New Paragraph')

// appendChild
const saveTextToNewParagraph = newParagraph.appendChild(textNewParagraph)

// Mau disimpan dimana
const sectionA = document.getElementById('a')
 sectionA.appendChild(newParagraph)

//  Create Element && Text Node
const newList = document.createElement('li')
const textNewList = document.createTextNode('new list from JS')

// appendChild
const saveTextToNewList = newList.appendChild(textNewList)

// insertBefore && mau disimpan dimana
const ul = document.querySelector('section#b ul')
const insertNewlist = ul.querySelector('ul li:nth-child(2)')

//add
ul.insertBefore(newList, insertNewlist)

newList.classList.add('newlist')
newList.style.backgroundColor = 'coral'
newList.style.color = 'white'

// removeChild
sectionA.removeChild(ahref)

const sectionB = document.getElementById('b')
const replaceParagraph = sectionB.querySelector('p')

const createH1 = document.createElement('h1')
const textCreateH1 = document.createTextNode('Hello Uya Onter ')

// appendChild
createH1.appendChild(textCreateH1)

// replaceChild
sectionB.replaceChild(createH1, replaceParagraph)

createH1.style.backgroundColor = 'lightblue'
createH1.style.color = 'black'
createH1.style.border = '1px solid black'
