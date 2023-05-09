import criarTag from "./manipulacao.js"
import { addChild } from "./manipulacao.js"

let body = document.body;

let tags_nav = ['nav','div','a','ul','a','ul','a','ul']
let navElements = []

let tags = ['div', 'section', 'div', 'div', 'img', 'div', 'h1', 'p', 'a']
let elements = []

tags_nav.forEach(tag =>{
    navElements.push(criarTag(tag))
})

tags.forEach(tag =>{
    elements.push(criarTag(tag))
})

//nav 
addChild(body,navElements[0])
navElements[0].classList.add('nav__curriculo')

addChild(navElements[0],navElements[1])
navElements[1].classList.add('org-nav')

addChild(navElements[1], navElements[2])
navElements[2].href = "index.html"

addChild(navElements[2], navElements[3])
navElements[3].textContent = "Início"

addChild(navElements[1], navElements[4])
navElements[4].href = "curriculo.html"

addChild(navElements[4], navElements[5])
navElements[5].textContent = "Currículo"

addChild(navElements[1], navElements[6])
navElements[6].href = "equipe.html"

addChild(navElements[6], navElements[7])
navElements[7].textContent = "Equipe"

//conteudo
addChild(body, elements[0])
elements[0].classList.add('container__index')

addChild(elements[0], elements[1])
elements[1].classList.add('section__index')

addChild(elements[1], elements[2])
elements[2].classList.add('base-info-index')

addChild(elements[2], elements[3])
elements[3].classList.add('base-img-index')

addChild(elements[3], elements[4])
elements[4].src = "assets/img/inicio.png"
elements[4].classList.add('img-index')

addChild(elements[2],elements[5])
elements[5].classList.add('info-index')

addChild(elements[5],elements[6])
elements[6].classList.add('h1-index')
elements[6].textContent = "Quer praticidade?"

addChild(elements[5],elements[7])
elements[7].classList.add('p-index')
elements[7].textContent = "Use nosso modelo e facilite a montagem do seu currículo"

addChild(elements[1], elements[8])
elements[8].classList.add('botao-index')
elements[8].textContent = "Conheça nosso modelo"
elements[8].href = "curriculo.html"