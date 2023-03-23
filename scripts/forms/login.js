import Users from '../../model/Users.js'

let errType = ""


document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('button[form="login-form"]').addEventListener('click', e => {

        e.preventDefault()

        const errorMsg = document.querySelector('.error-msg')
        errorMsg.classList.add('hidden')

        const email = document.querySelector("#email")
        const password = document.querySelector("#password")


        if (!email.validity.valid) {
            errorMsg.innerText = "No es un email valido"
            errorMsg.classList.remove("hidden")
            errType = "email"
            return
        }


        const user = Users.findByEmail(email.value).then(user => {

            if (!user.exists()) {
                errorMsg.innerText = "El email no existe"
                errorMsg.classList.remove("hidden")
                return
            }

            // TODO: El usuario existe


        })

    })

    // Hiddens the error-msg if the input is empty (maches errType)
    document.querySelectorAll('#login-form input').forEach(elm => elm.addEventListener("input", e =>
        elm.value === "" && errType === e.target.id && document.querySelector('.error-msg').classList.add("hidden")
    ))
})