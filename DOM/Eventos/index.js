//Criação da function register que é chamada quando o botão é clicado e o evento é disparado
function register(ev) {
    const sectionElement = ev.currentTarget.parentNode
    const userName = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if (password === passwordConfirmation) {
        alert('Usuário ' + userName + " regitrado!!")
    } else {
        alert('As senhas não coincidem!!')
    }
}

//Criando o envento para remover o evento register do outro botão
function removeEvent() {
    button.removeEventListener('click', register)
    alert('Evento register removido!')
}

//Instanciando o elemento botão atraves do dom
const button = document.getElementById('register-button')

//Criando eventeno para quando o botão for clicado registrar o usuário!!
button.addEventListener('click', register)

//Criando evento para quando o mouse for passado por cima do botão mostrar o elemento no console
button.addEventListener('mouseover', function (ev) {
    console.log(ev)
})