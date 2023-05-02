export default function imprimir(main){

    let botoes = document.querySelectorAll('#imprimiuSaiu')
    botoes.forEach(key=>{
        key.remove()
    })

    window.print()
    /*let jsPDF = window.jspdf.jsPDF
    let doc = new jsPDF();

    doc.html(main,{
        callback: function(){
            main.print()
        }
    })*/
}