import { load } from '../index.js'
import User from '../../model/User.js'

document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded")
    const pr = [
        load('../../html/header.html', node => document.querySelector("body").insertBefore(node, document.querySelector("main"))),
        load('../../html/footer.html', node => document.querySelector("body").appendChild(node))
    ]

    Promise.all(pr).then(() => {

        const user = User.loggedIn();

        if (user.exists()) {

            const [subscribe, login, signup] = document.querySelectorAll(".other-links li a")


            /**
             *  Estos son los 3 links
             *  
             * El usuario esta en la variable user
             * Se pueden manipular directamente los links desde aqui
             *  En la clase logged añade como quieres que se vea el nombre
             */


            login.innerText = user.name()
            login.classList.add("logged")

            signup.innerText = "Logout"
            signup.href = ""

            signup.addEventListener("click", () => user.logout())

            subscribe.innerHTML = `<img style="width: 1.8rem" src="../icons/icono.png" />`
            subscribe.href = ""
        }
    })
})