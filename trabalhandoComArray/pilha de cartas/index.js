let options = ""
let pilhaDeCartas = []

do{
    options = prompt(
        "Cartas no baralho:\n " + pilhaDeCartas.length +
        "\nEscolha uma opção: " +
        "\n1- Adcionar carta" +
        "\n2- Puxar carta" +
        "\n3- Sair"
    )

    switch (options) {
        case "1":
            let nomeCarta = prompt("Qual o nome da carta? ")
            pilhaDeCartas.unshift(nomeCarta)
            break
        case "2":
            let puxada = pilhaDeCartas.shift()
            alert("A carta " + puxada + " foi puxada do topo do baralho")
            break
        case "3":
            alert("Finalizando...")
            break
        default:
            "Opção inválida, tente novamente!!"
    }
} while (options !== "3")