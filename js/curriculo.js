import criarTag from "./manipulacao.js"
import { addChild } from "./manipulacao.js"
import inserir, { inserirImagem } from "./inserir.js"
import {cloneCurso, cloneExp, cloneIdioma} from "./clonar.js"
import impressao from './imprimir.js'
import gerarObjeto from './objeto.js'

let body = document.body
let tags = ['main', 'sidebar', 'aside', 'div','div'
,'h1','h1','h1','h1','h1','h1','div','header'
,'div','h1','section','div','h2','p','div','h2','p'
,'div','h2','p','div','h2','p','section','div','p'
,'div','div','div','h2','li','span','p','p','div','div'
,'div','h2','li','span','p','div','h2','li','span','p'
,'div','div','div','p','li','span','div','p','li'
,'span','div','div','p','p','p','div','div','div','h2'
,'li','span','p','div','h2','li','span','p','div','h2','p']
tags[47] = 'button'
tags[58] = 'button'
tags[74] = 'button'
let elements = []

tags.forEach(tag =>{
    elements.push(criarTag(tag))
})

//console.log(elements)

//botão imprimir
let imprimir = document.createElement('button')
imprimir.classList.add('btn__print')
imprimir.textContent = 'IMPRIMIR'

imprimir.onclick=()=>{
    gerarObjeto()
    impressao(elements[1],navElements[0],imprimir)
}


let jsPDF = document.createElement('script')
jsPDF.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js'
addChild(body,jsPDF)

let tags_nav = ['nav','div','a','ul','a','ul','a','ul']
let navElements = []

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

//Main
addChild(body, elements[0])
//Sidebar
addChild(elements[0], elements[1])
elements[1].classList.add('section__base')
//Aside
addChild(elements[1], elements[2])
elements[2].classList.add('section__lateral')

//div titulo org
addChild(elements[2], elements[4])
elements[4].classList.add('titulo__org')
//h1s
addChild(elements[4], elements[5])
elements[5].textContent = 'Objetivo:'
addChild(elements[4], elements[6])
elements[6].textContent = 'Formação:'
addChild(elements[4], elements[7])
elements[7].textContent = 'Experiências:'
addChild(elements[4], elements[8])
elements[8].textContent = 'Idiomas:'
addChild(elements[4], elements[9])
elements[9].textContent = 'Informações adicionais:'
addChild(elements[4], elements[10])
elements[10].textContent = 'Cursos complementares:'

//div teste
addChild(elements[1], elements[11])
elements[11].classList.add('teste')

//header
addChild(elements[11], elements[12])
elements[12].classList.add('section__info')
//div nome__base
addChild(elements[12], elements[13])
elements[13].classList.add('nome__base')
//nome__h1
addChild(elements[13],elements[14])
elements[14].classList.add('nome__h1')
elements[14].textContent = '[Seu nome completo aqui]'
elements[14].onclick = ()=>{
    inserir(elements[14],elements[13],'input','text')
}

//section info__section
addChild(elements[12],elements[15])
elements[15].classList.add('info__section')
//div info__base
addChild(elements[15],elements[16])
elements[16].classList.add('info__base')
//h2__email
addChild(elements[16], elements[17])
elements[17].classList.add('h2__email')
elements[17].textContent = 'Email:'
//p__info
addChild(elements[16],elements[18])
elements[18].classList.add('p__info')
elements[18].textContent = '[ Seu e-mail ]'
elements[18].onclick = () =>{
    inserir(elements[18],elements[16],'input','email')
}
//div info__base
addChild(elements[15], elements[19])
elements[19].classList.add('info__base')
//h2__tel
addChild(elements[19],elements[20])
elements[20].classList.add('h2__tel')
elements[20].textContent = 'Telefone:'
//p__info
addChild(elements[19],elements[21])
elements[21].classList.add('p__info')
elements[21].textContent = '[ Seu telefone para contato ]'
elements[21].onclick=()=>{
    inserir(elements[21],elements[19],'input','text')
}
//div info__base
addChild(elements[15],elements[22])
elements[22].classList.add('info__base')
//h2__link
addChild(elements[22],elements[23])
elements[23].classList.add('h2__link')
elements[23].textContent = 'Site/Link:'
//p__info
addChild(elements[22],elements[24])
elements[24].classList.add('p__info')
elements[24].textContent = '[ Seu link adicional ]'
elements[24].onclick=()=>{
    inserir(elements[24],elements[22],'input','text')
}
//div info__base
addChild(elements[15],elements[25])
elements[25].classList.add('info__base')
//h2__link
addChild(elements[25],elements[26])
elements[26].classList.add('h2__link')
elements[26].textContent = 'Data de nascimento:'
//p__info
addChild(elements[25],elements[27])
elements[27].classList.add('p__info')
elements[27].textContent = '[ Sua data ]'
elements[27].onclick=()=>{
    inserir(elements[27],elements[25],'input','date')
}
//endereco div
addChild(elements[15],elements[78])
elements[78].classList.add('info__base')
// h2__link
addChild(elements[78],elements[79])
elements[79].classList.add('h2__link')
elements[79].textContent = 'Endereço:'
//p__info
addChild(elements[78],elements[80])
elements[80].classList.add('p__info')
elements[80].textContent = '[ Seu endereço ]'
elements[80].onclick=()=>{
    inserir(elements[80],elements[78],'input','text')
}

//section__conteudo
addChild(elements[11],elements[28])
elements[28].classList.add('section__conteudo')
//div desc__base
addChild(elements[28],elements[29])
elements[29].classList.add('desc__base')
//p__desc
addChild(elements[29],elements[30])
elements[30].classList.add('p__desc')
elements[30].textContent = '[ Descreva aqui um resumo sobre o que você deseja, seus objetivos e metas, tudo o que achar pertinente (com atenção às redundâncias!) ]'
elements[30].onclick=()=>{
    inserir(elements[30],elements[29],'textarea')
}
//divisoria
addChild(elements[28],elements[31])
elements[31].classList.add('divisoria')

//div desc__base
addChild(elements[28],elements[32])
elements[32].classList.add('desc__base')
//div org__data
addChild(elements[32],elements[33])
elements[33].classList.add('org__data')
//h2
addChild(elements[33],elements[34])
elements[34].textContent = '[ Nome da instituição ]'
elements[34].onclick = () =>{
    inserir(elements[34],elements[33],'input','text','first')
}
//li
addChild(elements[33],elements[35])
//span
addChild(elements[35],elements[36])
elements[36].textContent = '([Mês/Ano] - [Mês/Ano])'
elements[36].onclick = () =>{
    inserir(elements[36],elements[35],'input','text')
}
//p__desc
addChild(elements[32],elements[37])
elements[37].classList.add('p__desc')
elements[37].textContent = '[ Grau escolar alcançado ]'
elements[37].onclick = () =>{
    inserir(elements[37],elements[32],'input','text','outro',elements[38])
}
//p_destaques
addChild(elements[32],elements[38])
elements[38].classList.add('p_destaques')
elements[38].textContent = '[ Adicionais ]'
elements[38].onclick = () =>{
    inserir(elements[38],elements[32],'input','text')
}
//divisoria
addChild(elements[28],elements[39])
elements[39].classList.add('divisoria')

//div desc__base
addChild(elements[28],elements[40])
elements[40].classList.add('desc__base')
//div org__data
addChild(elements[40],elements[41])
elements[41].classList.add('org__data')
//h2
addChild(elements[41],elements[42])
elements[42].textContent = '[ Sua experiência ]'
elements[42].onclick=()=>{
    inserir(elements[42],elements[41],'input','text','first')
}
//li
addChild(elements[41],elements[43])
//span
addChild(elements[43],elements[44])
elements[44].textContent = '([Mês/Ano] - [Mês/Ano])'
elements[44].onclick=()=>{
    inserir(elements[44],elements[43],'input','text')
}
//p
addChild(elements[40],elements[45])
elements[45].classList.add('p__desc')
elements[45].textContent = '[ Nome da Empresa ]'
elements[45].onclick=()=>{
    inserir(elements[45],elements[40],'input','text','outro',elements[46])
}

//div org__data
addChild(elements[40],elements[46])
elements[46].classList.add('org__data')
// button add
addChild(elements[46],elements[47])
elements[47].textContent = 'Adicionar'
elements[47].classList.add('btn__add')
elements[47].onclick =()=>{
    cloneExp([elements[41],elements[45]],elements[46])
}
//elements[47].style.display = 'none'
/*
addChild(elements[46],elements[48])
//span
addChild(elements[48],elements[49])
elements[49].textContent = '(01/2016 - 12/2019)'
//p__desc
addChild(elements[40],elements[50])
elements[50].classList.add('p__desc')
elements[50].textContent = 'Perdi o nome da empresa'
*/

//divisoria
addChild(elements[28], elements[51])
elements[51].classList.add('divisoria')

//div desc__base topicos
addChild(elements[28],elements[52])
elements[52].classList.add('desc__base','topicos')

//div org__data
addChild(elements[52],elements[53])
elements[53].classList.add('org__data')
//p__desc
addChild(elements[53],elements[54])
elements[54].classList.add('p__desc')
elements[54].textContent = '[ Idioma ]'
elements[54].onclick=()=>{
    inserir(elements[54],elements[53],'input','text','first')
}
//li
addChild(elements[53],elements[55])
//span p__desc
addChild(elements[55],elements[56])
elements[56].classList.add('p__desc')
elements[56].textContent = '[ Nível ]'
elements[56].onclick=()=>{
    inserir(elements[56],elements[55],'input','text')
}
//div org__data
addChild(elements[52],elements[57])
elements[57].classList.add('org__data')
//p__desc
addChild(elements[57],elements[58])
elements[58].classList.add('p__desc')
elements[58].textContent = 'Adicionar'
elements[58].classList.add('btn__add')
elements[58].onclick =()=>{
    cloneIdioma(elements[53],elements[57])
}
/*
addChild(elements[57],elements[59])
//span p__desc
addChild(elements[59],elements[60])
elements[60].classList.add('p__desc')
elements[60].textContent = 'Avançado'*/

//divisoria
addChild(elements[28],elements[61])
elements[61].classList.add('divisoria')

//div desc__base topicos
addChild(elements[28],elements[62])
elements[62].classList.add('desc__base','topicos')
//p__desc 1
addChild(elements[62],elements[63])
elements[63].classList.add('p__desc')
elements[63].textContent = '[ Suas habilidades aqui ]'
elements[63].onclick=()=>{
    inserir(elements[63],elements[62],'textarea')
}

//divisoria
addChild(elements[28],elements[66])
elements[66].classList.add('divisoria')

//div desc__base
addChild(elements[28],elements[67])
elements[67].classList.add('desc__base')
//div org__data
addChild(elements[67],elements[68])
elements[68].classList.add('org__data')
//h2
addChild(elements[68],elements[69])
elements[69].textContent = '[ Nome do curso ]'
elements[69].onclick=()=>{
    inserir(elements[69],elements[68],'input','text','first')
}
//li
addChild(elements[68],elements[70])
//span
addChild(elements[70],elements[71])
elements[71].textContent = '([Mês/Ano] - [Mês/Ano])'
elements[71].onclick=()=>{
    inserir(elements[71],elements[70],'input','text')
}
//p__desc
addChild(elements[67],elements[72])
elements[72].classList.add('p__desc')
elements[72].textContent = '[ Nome da instituição ]'
elements[72].onclick = () =>{
    inserir(elements[72],elements[67],'input','text','outro',elements[73])
}

//div org__data
addChild(elements[67],elements[73])
elements[73].classList.add('org__data')
//h2
addChild(elements[73],elements[74])
elements[74].textContent = 'Adicionar'
elements[74].classList.add('btn__add')
elements[74].onclick=()=>{
    cloneCurso([elements[68],elements[72]],elements[73])
}
/*
addChild(elements[73],elements[75])
//span
addChild(elements[75],elements[76])
elements[76].textContent = '(01/2016 - 12/2019)'
//p__desc
addChild(elements[67],elements[77])
elements[77].classList.add('p__desc')
elements[77].textContent = 'EE Sítio das Laranjeiras'*/


addChild(body,imprimir)