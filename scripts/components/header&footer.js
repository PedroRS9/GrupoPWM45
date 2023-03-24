import { load } from '../index.js'
import User from '../../model/User.js'

document.addEventListener("DOMContentLoaded", () => {

    const pr = [
        load('../../html/header.html', node => document.querySelector("body").insertBefore(node, document.querySelector("main"))),
        load('../../html/footer.html', node => document.querySelector("body").appendChild(node))
    ]

    Promise.all(pr).then(() => {

        const user = User.loggedIn();

        if (user.exists()) {

            const [subscribe, login, signup] = document.querySelectorAll(".other-links li a")


            subscribe.innerHTML = `<img style="width: 1.8rem" src="../icons/icono.png" />`
            subscribe.href = ""
            subscribe.onclick = e => e.preventDefault()

            login.innerText = user.name()
            login.href = ""
            login.onclick = e => e.preventDefault()
            login.classList.add("logged")

            signup.innerText = "Logout"
            signup.href = ""
            signup.addEventListener("click", () => user.logout())
        }
    })
})