let option = "5"

do {
    option = prompt(
        "Escolha uma opção" +
        "\n1- Gramado" +
        "\n2- Maragori" +
        "\n3- Porto de galinhas" +
        "\n4- Bahia" +
        "\n5- Sair"
    )

    if (option === "1") {
        alert("Seja bem-vindo a Gramado")
    } else if (option === "2") {
        alert("Seja bem-vindo a Maragogi")
    } else if (option === "3") {
        alert("Seja bem-vindo a Porto de galinhas")
    } else if (option === "4") {
        alert("Seja bem-vindo a Bahia")
    } else {
        alert("Encerrando...")
    }
} while (option !== "5")