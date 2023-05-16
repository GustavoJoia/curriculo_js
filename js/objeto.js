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
    let xp = []

    for (let index = 0; index < (experiencias.length-1); index++) {

        let atual = experiencias[index]

        if(atual.tagName == 'DIV'){
            let exp = atual.children[0].textContent
            let duracao = atual.children[1].children[0].textContent
            xp.push(exp,duracao)
        } else if(atual.tagName == 'P'){
            let inst = atual.textContent
            xp.push(inst)
        }
        
    }

    let exp = []

    for (let index = 1; index <= xp.length; index++) {
        
        if(index%3 != 0){
            continue
        } else {
            let str_xp = xp[(index-2)]+'|'+xp[(index-1)]+'|'+xp[index]+';'
            exp.push(str_xp)
        }
        
    }

    let idiomas = descBase[3].children
    let idi = []

    for (let index = 0; index < (idiomas.length-1); index++) {
        
        let atual = idiomas[index]

        let lingua = atual.children[0].textContent
        let nivel = atual.children[1].children[0].textContent

        idi.push(lingua,nivel)
        
    }

    let falados = []

    for (let index = 1; index <= falados.length; index++) {
        
        if(index%2 != 0){
            continue
        } else {
            let str_idi = idi[(index-1)]+'|'+idi[index]+';'
            falados.push(str_idi)
        }
        
    }

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
        experiencias: exp,
        idiomas: falados,
        adicionais: adicionais
    }

    return objeto
}