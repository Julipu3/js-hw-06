let myForm = document.querySelector('.login-form')
myForm.addEventListener('submit', function (e) {
    e.preventDefault()

    let element = myForm.elements
    if (elements.email.value === '' || elements.password.value === '') {
        alert("Every field is required")
        return
    }

    console.log(
        {
            email: elements.email.value,
            password: elements.password.value

        }
    )
    myForm.reset()
}
)

