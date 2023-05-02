export default function criarTag(tag){
    let n_tag = document.createElement(tag)
    return n_tag
}

export function addChild(parent, child){
    parent.appendChild(child)
}

export function addFirstChild(parent,child){
    parent.insertBefore(child,parent.firstChild)
}

export function addBefore(parent, child, outro){
    parent.insertBefore(child,outro)
}