export const load = (route, node) => fetch(route)
    .then(res => res.text())
    .then(data => {
        let frag = new DocumentFragment()
        let elm = document.createElement("div")
        elm.innerHTML = `<div class="loaded">${data}</div>`
        frag.append(elm)
        node.appendChild(frag)
    })