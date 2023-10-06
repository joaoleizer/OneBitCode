let option = 0
const arrPacientes = []

do {
    let pacientes = ""
    for (let indice = 0; indice < arrPacientes.length; indice++) {
        pacientes += (indice + 1) + "° " + arrPacientes[indice] + "\n" 
    }

    option = prompt(
        "Pacientes na fila:\n" +
        pacientes + 
        "\nEscolha uma opção: " +
        "\n1- Novo paciente " +
        "\n2- Consultar paciente " +
        "\n3- Sair"
    )

    if (option === "1") {
        let nome = prompt("Qual o nome do paciente? ")
        arrPacientes.push(nome)
    }else if (option === "2") {
        let atendido = arrPacientes.shift()
        alert("O paciente " + atendido + " foi atendido!")
    } else {
        alert("Finalizando...")
    }
} while (option !== "3")