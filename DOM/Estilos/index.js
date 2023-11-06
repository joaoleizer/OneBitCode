function lightTheme() {
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9'
}

function darkTheme() {
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
}

//Apesar desta alteração do estilo não funcionar caso use algum dos outros dois botões, pois ele iram utilizar estilo inLine  que tem mais peso em compração aos outros, este foi feito para testar as diferentes formas de alteção de estilos com css
function switchTheme() {
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}

document.getElementById('lightBtn').addEventListener('click', lightTheme)
document.getElementById('darkBtn').addEventListener('click', darkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)