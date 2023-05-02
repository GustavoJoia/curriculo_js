import criar from "./manipulacao.js";
import inserir from "./inserir.js";
import criarTag, { addChild, addFirstChild, addBefore } from "./manipulacao.js";

export function cloneExp(elements,before){
    let t1 = elements[0]
    let mainParent = t1.parentNode
    let div = criar(t1.tagName)
    div.classList.add(t1.classList)

    console.log(div)

    let t2 = elements[1]
    let p = criar(t2.tagName)
    p.textContent = t2.textContent
    p.classList.add(t2.classList)
    p.ondblclick=()=>{
       inserir(p,mainParent,'input','text','outro',before)
    }

    let child = elements[0].children
    let h2 = child[0]
    let nh2 = criar(h2.tagName)
    nh2.textContent = h2.textContent
    nh2.ondblclick=()=>{
        inserir(nh2,div,'input','text','first')
    }

    let li = child[1]
    let nli = criar(li.tagName)
    let span = li.children[0]
    let nspan = criar(span.tagName)
    nspan.textContent = span.textContent
    nspan.ondblclick=()=>{
        inserir(nspan,nli,'input','text')
    }
    
    addChild(div,nh2)
    addChild(div,nli)
    addChild(nli,nspan)

    addBefore(t1.parentNode,div,before)
    addBefore(t1.parentNode,p,before)

}

export function cloneIdioma(elements,before){
    
    let mainParent = elements.parentNode

    let div = criarTag(elements.tagName)
    div.classList.add(elements.classList)

    let p = elements.children[0]
    let np = criarTag(p.tagName)
    np.classList.add(p.classList)
    np.textContent = p.textContent
    np.ondblclick=()=>{
        inserir(np,div,'input','text','first')
    }

    let li = elements.children[1]
    let nli = criarTag(li.tagName)

    let span = li.children[0]
    let nspan = criarTag(span.tagName)
    nspan.classList.add(span.classList)
    nspan.textContent = span.textContent
    nspan.ondblclick=()=>{
        inserir(nspan,nli,'input','text')
    }
    addChild(nli,nspan)
    addChild(div,np)
    addChild(div,nli)
    console.log(mainParent,div,before)
    addBefore(mainParent,div,before)

}

export function cloneCurso(elements,before){
    let t1 = elements[0]
    let mainParent = t1.parentNode
    let div = criar(t1.tagName)
    div.classList.add(t1.classList)

    console.log(div)

    let t2 = elements[1]
    let p = criar(t2.tagName)
    p.textContent = t2.textContent
    p.classList.add(t2.classList)
    p.ondblclick=()=>{
       inserir(p,mainParent,'input','text','outro',before)
    }

    let child = elements[0].children
    let h2 = child[0]
    let nh2 = criar(h2.tagName)
    nh2.textContent = h2.textContent
    nh2.ondblclick=()=>{
        inserir(nh2,div,'input','text','first')
    }

    let li = child[1]
    let nli = criar(li.tagName)
    let span = li.children[0]
    let nspan = criar(span.tagName)
    nspan.textContent = span.textContent
    nspan.ondblclick=()=>{
        inserir(nspan,nli,'input','text')
    }
    
    addChild(div,nh2)
    addChild(div,nli)
    addChild(nli,nspan)

    addBefore(t1.parentNode,div,before)
    addBefore(t1.parentNode,p,before)
}