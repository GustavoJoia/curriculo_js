export default function gerarObjeto(){

    let infoHeader = document.querySelectorAll('.p__info')
    let pDesc = document.querySelectorAll('.p__desc')
    let descBase = document.querySelectorAll('.desc__base')

    let nome = document.querySelector('.nome__h1').textContent
    let email = infoHeader[0].textContent
    let tel = infoHeader[1].textContent
    let link = infoHeader[2].textContent
    let dataNasc = infoHeader[3].textContent
    let ender = infoHeader[4].textContent
    let objetivo = pDesc[0].textContent

    let formaDados = descBase[1].children
    let formaEscola = formaDados[0].children[0].textContent
    let formaPeriodo = formaDados[0].children[1].children[0].textContent
    let formaGrau = formaDados[1].textContent
    let formaAdd = formaDados[2].textContent
    let formacao = formaEscola +' '+formaPeriodo+' '+formaGrau+' '+formaAdd
    
    let experiencias = descBase[2].children

    for (let index = 0; index < experiencias.length; index++) {

        
        
    }

    let idiomas = []
    let adicionais = descBase[4].children[0].textContent
    let cursos = []

    let objeto = {
        nome: nome,
        email: email,
        tel: tel,
        link: link,
        nasc: dataNasc,
        endereco: ender,
        objetivo: objetivo,
        formacao: formacao,

        adicionais: adicionais
    }

    return objeto
}