let money = parseFloat(prompt("Qual a quantidade inicial de dinheiro? "))
let option = "3"

do {
    option = prompt(
        "Banco Juzefino" +
        "\nSaldo: R$" + money +
        "\n1- Adcionar dinheiro" +
        "\n2- Retirar dinheiro" +
        "\n3- Fechar"
    )

    if (option === "1") {
        let add = parseFloat(prompt("Quanto quer adcionar a sua conta? "))
        alert("Adcionando R$" + add + " a sua conta.")
        money += add
    }else if (option === "2") {
        let remove = parseFloat(prompt("Quanto quer remover da sua conta? "))
        alert("Removendo R$" + remove + " da sua conta.")
        money -= remove
    }else {
        alert("Finalizando...")
    }
} while (option !== "3")