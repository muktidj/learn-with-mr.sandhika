const button = document.querySelector('button')
const h1 = document.getElementsByTagName('h1')
const sliderMerah = document.querySelector('input[name=sliderMerah]')
const sliderHijau = document.querySelector('input[name=sliderHijau]')
const sliderBiru = document.querySelector('input[name=sliderBiru]')
let colorRandom1 = Math.round(Math.random() * 255 + 1)
let colorRandom2 = Math.round(Math.random() * 255 + 1)
let colorRandom3 = Math.round(Math.random() * 255 + 1)
let body = document.body






button.addEventListener('click', () => {
    //document.body.setAttribute('class', 'red')
   body.classList.toggle('red')

    body.removeAttribute('style')


})

const buttonRandomChangeColor = () => {

const newButtonRandom = document.createElement('button')
const teksNewButtonRandom = document.createTextNode('Random Color')



newButtonRandom.appendChild(teksNewButtonRandom)
newButtonRandom.setAttribute('type', 'submit')
button.after(newButtonRandom)
newButtonRandom.style.marginLeft = '5px'
newButtonRandom.addEventListener('click', () => {
   let colorRandom1 = Math.round(Math.random() * 255 + 1)
   let colorRandom2 = Math.round(Math.random() * 255 + 1)
   let colorRandom3 = Math.round(Math.random() * 255 + 1)
   body.style.backgroundColor = 'rgb('+ colorRandom1 + ', '+ colorRandom2 +', '+ colorRandom3 +')'
   body.removeAttribute('class')

})




}

buttonRandomChangeColor()


const sliderChangeColor = () => {
sliderMerah.addEventListener('input', () => {


   colorRandom1 = sliderMerah.value
   colorRandom2 = sliderHijau.value
   colorRandom3 = sliderHijau.value
   console.log(colorRandom1);
   console.log(colorRandom2);
   console.log(colorRandom3);

  body.style.backgroundColor = 'rgb('+ colorRandom1 +','+ colorRandom2+','+ colorRandom3 +')'
  body.removeAttribute('class')

})

sliderHijau.addEventListener('input', () => {


   colorRandom1 = sliderMerah.value
   colorRandom2 = sliderHijau.value
   colorRandom3 = sliderBiru.value
   console.log(colorRandom1);
   console.log(colorRandom2);
   console.log(colorRandom3);

  body.style.backgroundColor = 'rgb('+ colorRandom1 +','+ colorRandom2+','+ colorRandom3 +')'
  body.removeAttribute('class')
})

sliderBiru.addEventListener('input', ()=> {
    colorRandom1 = sliderMerah.value
   colorRandom2 = sliderHijau.value
   colorRandom3 = sliderBiru.value

  body.style.backgroundColor = 'rgb('+ colorRandom1 +','+ colorRandom2+', '+ colorRandom3+')'
  body.removeAttribute('class')
})
}

sliderChangeColor()