let body = document.body
let tags = ['main', 'sidebar', 'aside', 'div','div'
,'h1','h1','h1','h1','h1','h1','div','header'
,'div','h1','section','div','h2','p','div','h2','p'
,'div','h2','p','div','h2','p','section','div','p'
,'div','div','div','h2','li','span','p','p','div','div'
,'div','h2','li','span','p','div','h2','li','span','p'
,'div','div','div','p','li','span','div','p','li'
,'span','div','div','p','p','p','div','div','div','h2'
,'li','span','p','div','h2','li','span','p']
let elements = []

tags.forEach(tag =>{
    elements.push(criarTag(tag))
})

console.log(elements)

//Main
addChild(body, elements[0])
//Sidebar
addChild(elements[0], elements[1])
elements[1].classList.add('section__base')
//Aside
addChild(elements[1], elements[2])
elements[2].classList.add('section__lateral')
//div squircle
addChild(elements[2], elements[3])
elements[3].classList.add('squircle')
//div titulo org
addChild(elements[2], elements[4])
elements[4].classList.add('titulo__org')
//h1s
addChild(elements[4], elements[5])
elements[5].textContent = 'Resumo:'
addChild(elements[4], elements[6])
elements[6].textContent = 'Formação:'
addChild(elements[4], elements[7])
elements[7].textContent = 'Experiências:'
addChild(elements[4], elements[8])
elements[8].textContent = 'Idiomas:'
addChild(elements[4], elements[9])
elements[9].textContent = 'Habilidades:'
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
elements[14].textContent = 'Luana Gabrielle Rodrigues Macedo'

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
elements[18].textContent = 'taltal@gmail.com'
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
elements[21].textContent = '(11) 98754-1542'
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
elements[24].textContent = 'abcde.com.br'
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
elements[27].textContent = '24/04/2005'

//section__conteudo
addChild(elements[11],elements[28])
elements[28].classList.add('section__conteudo')
//div desc__base
addChild(elements[28],elements[29])
elements[29].classList.add('desc__base')
//p__desc
addChild(elements[29],elements[30])
elements[30].classList.add('p__desc')
elements[30].textContent = 'Muito forte grande capaz trabalho muito muito muito e bla bla bla Muito forte grande capaz trabalho muito muito muito e bla bla bla Muito forte grande capaz trabalho muito muito muito e bla bla bla'

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
elements[34].textContent = 'EE Sítio das Laranjeiras'
//li
addChild(elements[33],elements[35])
//span
addChild(elements[35],elements[36])
elements[36].textContent = '(01/2016 - 12/2019)'
//p__desc
addChild(elements[32],elements[37])
elements[37].classList.add('p__desc')
elements[37].textContent = 'Ensino médio regular'
//p_destaques
addChild(elements[32],elements[38])
elements[38].classList.add('p_destaques')
elements[38].textContent = 'Formada com honras'

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
elements[42].textContent = 'Operadora de Telemarketing'
//li
addChild(elements[41],elements[43])
//span
addChild(elements[43],elements[44])
elements[44].textContent = '(01/2016 - 12/2019)'
//p
addChild(elements[40],elements[45])
elements[45].classList.add('p__desc')
elements[45].textContent = 'Perdi o nome da empresa'

//div org__data
addChild(elements[40],elements[46])
elements[46].classList.add('org__data')
//h2
addChild(elements[46],elements[47])
elements[47].textContent = 'Operadora de Telemarketing'
//li
addChild(elements[46],elements[48])
//span
addChild(elements[48],elements[49])
elements[49].textContent = '(01/2016 - 12/2019)'
//p__desc
addChild(elements[40],elements[50])
elements[50].classList.add('p__desc')
elements[50].textContent = 'Perdi o nome da empresa'

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
elements[54].textContent = 'Inglês'
//li
addChild(elements[53],elements[55])
//span p__desc
addChild(elements[55],elements[56])
elements[56].classList.add('p__desc')
elements[56].textContent = 'Intermediário'

//div org__data
addChild(elements[52],elements[57])
elements[57].classList.add('org__data')
//p__desc
addChild(elements[57],elements[58])
elements[58].classList.add('p__desc')
elements[58].textContent = 'Espanhol'
//li
addChild(elements[57],elements[59])
//span p__desc
addChild(elements[59],elements[60])
elements[60].classList.add('p__desc')
elements[60].textContent = 'Avançado'

//divisoria
addChild(elements[28],elements[61])
elements[61].classList.add('divisoria')

//div desc__base topicos
addChild(elements[28],elements[62])
elements[62].classList.add('desc__base','topicos')
//p__desc 1
addChild(elements[62],elements[63])
elements[63].classList.add('p__desc')
elements[63].textContent = 'Habilidade'
//p__desc 2
addChild(elements[62],elements[64])
elements[64].classList.add('p__desc')
elements[64].textContent = 'Outra habilidade'
//p__desc 3
addChild(elements[62],elements[65])
elements[65].classList.add('p__desc')
elements[65].textContent = 'Mais uma, coisa de maluco'

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
elements[69].textContent = 'Técnologia da Informação'
//li
addChild(elements[68],elements[70])
//span
addChild(elements[70],elements[71])
elements[71].textContent = '(01/2016 - 12/2019)'
//p__desc
addChild(elements[67],elements[72])
elements[72].classList.add('p__desc')
elements[72].textContent = 'EE Sítio das Laranjeiras'

//div org__data
addChild(elements[67],elements[73])
elements[73].classList.add('org__data')
//h2
addChild(elements[73],elements[74])
elements[74].textContent = 'Sistemas Embarcados'
//li
addChild(elements[73],elements[75])
//span
addChild(elements[75],elements[76])
elements[76].textContent = '(01/2016 - 12/2019)'
//p__desc
addChild(elements[67],elements[77])
elements[77].classList.add('p__desc')
elements[77].textContent = 'EE Sítio das Laranjeiras'

function criarTag(tag){
    let n_tag = document.createElement(tag)
    return n_tag
}

function addChild(parent, child){
    parent.appendChild(child)
}