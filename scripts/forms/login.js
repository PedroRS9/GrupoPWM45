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
            email.reportValidity()
            return
        }


        const user = Users.findByEmail(email.value).then(user => {

            if (!user.exists()) {
                errorMsg.innerText = "El email no existe"
                errType = "email"
                errorMsg.classList.remove("hidden")
                return
            }

            // Client-validation, but not should be done here
            if (user.password() !== password.value) {
                errorMsg.innerText = "La contraseña no coincide"
                errorMsg.classList.remove("hidden")
                errType = "password"
                return
            }

            user.login()
            window.history.back()
        })

    })

    // Hiddens the error-msg if the input is empty (maches errType)
    document.querySelectorAll('#login-form input').forEach(elm => elm.addEventListener("input", e =>
        errType === e.target.id && document.querySelector('.error-msg').classList.add("hidden")
    ))
})