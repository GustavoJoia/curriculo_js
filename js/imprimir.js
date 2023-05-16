export default function imprimir(section, nav, btn){
    nav.style.display = 'none'
    btn.style.display = 'none'
    section.style.marginTop = '0'

    let add = document.querySelectorAll('.btn__add')

    add.forEach(b=>{
        b.style.display = 'none'
    })

    //print()
    nav.style.display = 'flex'
    btn.style.display = 'block'
    section.style.marginTop = '8vh'
    
    add.forEach(b=>{
        b.style.display = 'block'
    })
}