const paragraph3 = document.querySelector('.p3')
const paragraph2 = document.querySelector('.p2')
const paragraph4 = document.querySelector('section#b p')

// Event Handler
const ubahWarna3 = () => {
    paragraph3.style.backgroundColor = 'coral'
}
const ubahWarna2 = () => {
    paragraph2.style.backgroundColor = 'salmon'
}

paragraph2.onclick = ubahWarna2

// Add Event Listener
paragraph4.addEventListener('click', () => {
    const ul = document.querySelector('section#b ul')
    const newList = document.createElement('li')
    const newTeksList = document.createTextNode('new list')

    newList.appendChild(newTeksList)
    ul.appendChild(newList)


})