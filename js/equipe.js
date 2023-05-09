import criarTag from "./manipulacao.js"
import { addChild } from "./manipulacao.js"

let body = document.body;
body.classList.add('body__integrantes');
let tags_containers = ['section', 'div', 'div'];
let contElements = [];

let tags_resumo = ['div','div', 'h1', 'p'];
let resumoElements = [];

let tags_info = ['div','h2','div', 'img', 'div', 'div', 'p', 'p', 'div', 'p', 'p', 'a',
                 'div','h2','div', 'img', 'div', 'div', 'p', 'p', 'div', 'p', 'p', 'a']
let infoElements = []

let tags_nav = ['nav','div','a','ul','a','ul','a','ul']
let navElements = []

tags_containers.forEach(tag =>{
    contElements.push(criarTag(tag))
})

tags_resumo.forEach(tag =>{
    resumoElements.push(criarTag(tag))
})

tags_info.forEach(tag =>{
    infoElements.push(criarTag(tag))
})

tags_nav.forEach(tag =>{
    navElements.push(criarTag(tag))
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

       

//container 1 e 2
addChild(body, contElements[0]);
contElements[0].classList.add('quem-somos__section')

addChild(contElements[0], contElements[1]);
contElements[1].classList.add('container__integrantes')


//resumo - elementos
addChild(contElements[1], resumoElements[0])
resumoElements[0].classList.add('resumo__integrantes')

addChild(resumoElements[0], resumoElements[1])
resumoElements[1].classList.add('resumo__texto')

addChild(resumoElements[1], resumoElements[2])
resumoElements[2].classList.add('h1__integrantes-resumo')
resumoElements[2].textContent = "NOSSA EQUIPE"

addChild(resumoElements[1],resumoElements[3])
resumoElements[3].classList.add('p__integrantes')
resumoElements[3].textContent = "Estudantes do Técnico em Desenvolvimento de Sistemas integrado ao Ensino Médio, atualmente, no último ano de formação. ETEC de Cidade Tiradentes, 2023."

//cards
addChild(contElements[1], contElements[2])
contElements[2].classList.add('container__cards')


// card - luana
addChild(contElements[2], infoElements[0])
infoElements[0].classList.add('card-info')

addChild(infoElements[0], infoElements[1])
infoElements[1].classList.add('nome-integrantes')
infoElements[1].textContent = "LUANA GABRIELLE RODRIGUES MACEDO"

addChild(infoElements[0], infoElements[2])
infoElements[2].classList.add('info-img__integrantes')

addChild(infoElements[2], infoElements[3])
infoElements[3].classList.add('img__integrantes')
infoElements[3].src = "assets/img/luana.png"

addChild(infoElements[2], infoElements[4])
infoElements[4].classList.add('info-integrantes')

addChild(infoElements[4], infoElements[5])
infoElements[5].classList.add('row-org')

addChild(infoElements[5], infoElements[6])
infoElements[6].classList.add('titulo-info')
infoElements[6].textContent = "Idade:"

addChild(infoElements[5], infoElements[7])
infoElements[7].classList.add('texto-info')
infoElements[7].textContent = "18 anos"

addChild(infoElements[4], infoElements[8])
infoElements[8].classList.add('row-org')

addChild(infoElements[8], infoElements[9])
infoElements[9].classList.add('titulo-info')
infoElements[9].textContent = "Github:"

addChild(infoElements[8], infoElements[10])
infoElements[10].classList.add('texto-info')

addChild(infoElements[10], infoElements[11])
infoElements[11].href = "github.com/luanagbrm"
infoElements[11].textContent = "@luanagbrm"

// card - gustavo
addChild(contElements[2], infoElements[12])
infoElements[12].classList.add('card-info')

addChild(infoElements[12], infoElements[13])
infoElements[13].classList.add('nome-integrantes')
infoElements[13].textContent = "GUSTAVO DE SOUZA COSTA JOIA"

addChild(infoElements[12], infoElements[14])
infoElements[14].classList.add('info-img__integrantes')

addChild(infoElements[14], infoElements[15])
infoElements[15].classList.add('img__integrantes')
infoElements[15].src = "assets/img/gustavo.png"

addChild(infoElements[14], infoElements[16])
infoElements[16].classList.add('info-integrantes')

addChild(infoElements[16], infoElements[17])
infoElements[17].classList.add('row-org')

addChild(infoElements[17], infoElements[18])
infoElements[18].classList.add('titulo-info')
infoElements[18].textContent = "Idade:"

addChild(infoElements[17], infoElements[19])
infoElements[19].classList.add('texto-info')
infoElements[19].textContent = "17 anos"

addChild(infoElements[16], infoElements[20])
infoElements[20].classList.add('row-org')

addChild(infoElements[20], infoElements[21])
infoElements[21].classList.add('titulo-info')
infoElements[21].textContent = "Github:"

addChild(infoElements[20], infoElements[22])
infoElements[22].classList.add('texto-info')

addChild(infoElements[22], infoElements[23])
infoElements[23].href = "github.com/GustavoJoia"
infoElements[23].textContent = "@GustavoJoia"

