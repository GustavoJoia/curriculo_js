import { addBefore, addChild, addFirstChild } from "./manipulacao.js"
import dataFormat from "./formatacao.js"

export default function inserir(element, parent, tag, type, child, outro){

    let e = element
    let v = element.textContent

    element.remove()
    element = document.createElement(tag)
    if(tag == 'input'){
        element.type = type
    }
    element.classList.add('input__dados')
    if(child == 'first'){
        addFirstChild(parent,element)
    } else if(child == 'outro'){
        addBefore(parent,element,outro)
    }
    else {
        addChild(parent,element)
    }
    element.placeholder = v
    element.focus()

    element.onblur = ()=>{
        let v2
        if(element.value==''){
            v2 = v
        } else { 
            let v_temp = element.value
            if(type=='date'){
                v2 = dataFormat(v_temp)
            } else {
                v2 = v_temp
            }
        }
        element.remove()
        element = e
        if(child == 'first'){
            addFirstChild(parent,element)
        } else if(child == 'outro'){
            addBefore(parent,element,outro)
        }
        else {
            addChild(parent,element)
        }
        element.textContent = v2

        element.ondblclick = () =>{
            inserir(element, parent, tag, type,child, outro)
        }
        
    }
    element.onkeydown = (key)=>{
        if(key.keyCode==13){
            let v2
            if(element.value==''){
                v2 = v
            } else { 
                let v_temp = element.value
                if(type=='date'){
                    v2 = dataFormat(v_temp)
                } else {
                    v2 = v_temp
                }
            }
            element.remove()
            element = e
            if(child == 'first'){
                addFirstChild(parent,element)
            } else if(child == 'outro'){
                addBefore(parent,element,outro)
            }
            else {
                addChild(parent,element)
            }
            element.textContent = v2
    
            element.ondblclick = () =>{
                inserir(element, parent, tag, type,child, outro)
            }
        }
        
    }

}

export function inserirImagem(div){

    let squircle = div

    let input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/.jpg,.png'
    input.onchange=()=>{
        let file = input.files[0]
        let reader = new FileReader()
        input.remove()
        reader.onload=()=>{
            div.style.backgroundImage = `url(${reader.result})`
        }
        reader.readAsDataURL(file)
    }
    addChild(div,input)

}