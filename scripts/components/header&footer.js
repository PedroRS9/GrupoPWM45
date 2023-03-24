import { load } from '../index.js'
import User from '../../model/User.js'
import hamburger from '../hamburger.js'

document.addEventListener("DOMContentLoaded", () => {

    const pr = [
        load('../../html/header.html', node => document.querySelector("body").insertBefore(node, document.querySelector("main"))),
        load('../../html/footer.html', node => document.querySelector("body").appendChild(node))
    ]


    Promise.all(pr).then(() => {

        const user = User.loggedIn();

        if (user.exists()) {

            const [subscribe, login, signup] = document.querySelectorAll(".other-links li a")

            login.innerHTML = `${'<img class="logged-img" src="../icons/icono.png" />'} ${user.name()}`
            login.href = ""
            login.onclick = e => e.preventDefault()
            login.classList.add("logged")

            signup.innerText = "Logout"
            signup.href = ""
            signup.addEventListener("click", () => user.logout())
        }

    }).then(() => hamburger())

})