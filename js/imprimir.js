export default function imprimir(section, nav, btn, add){
    nav.style.display = 'none'
    btn.style.display = 'none'
    section.style.marginTop = '0'

    add.forEach(botao=>{
        botao.style.display = 'none'
    })

    print()
    nav.style.display = 'flex'
    btn.style.display = 'block'
    section.style.marginTop = '8vh'
    add.forEach(botao=>{
        botao.style.display = 'block'
    })

}