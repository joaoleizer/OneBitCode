const form = document.getElementById('orderForm')

form.addEventListener('submit', function (ev) {
    ev.preventDefault()

    const name = document.querySelector('input[name="name"]').value
    const address = document.querySelector('input[name="address"]').value
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const observations = document.querySelector('textarea').value

    let salad = ""
    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item) {
        salad += " - " + item.value + "\n"
    })

    const confirmation = confirm(
        "Você confirma este pedido? " +
        "\nNome do cliente: " + name +
        "\nEndereço do cliente: " + address +
        "\nTipo do pão: " + breadType +
        "\nRecheio: \n -" + main + "\n" + salad +
        "\nObservações: " + observations
    )

    if (confirmation) {
        alert("Pedido realizado com sucesso!!")
    } else {
        alert("Pedido cancelado!!")
    }

    document.querySelector('input[name="name"]').value = ""
    document.querySelector('input[name="address"]').value = ""
    document.querySelector('select[name="breadType"]').value = ""
    document.querySelector('input[name="main"]').value = ""
    document.querySelector('textarea').value = ""
    
})