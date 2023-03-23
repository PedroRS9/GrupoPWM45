import { load } from '../index.js'

document.addEventListener("DOMContentLoaded", () => {
    load('../../html/header.html', node => document.querySelector("body").insertBefore(node, document.querySelector("main")))
    load('../../html/footer.html', node => document.querySelector("body").appendChild(node))
})


import User from '../../model/User.js'
document.addEventListener("DOMContentLoaded", () => {
    console.log(User.loggedIn().exists())
})
