let option = ""
let vaga = []

function menu() {
    const menu = prompt(
        "Seja Bem-Vindo a vagas.com" + 
        "\nEscolha uma opção abaixo:" +
        "\n1-Criar uma nova vaga" +
        "\n2-Inscrever-se em uma vaga" +
        "\n3-Listar vagas disponíveis" +
        "\n4-Visualizar uma vaga" +
        "\n5-Excluir uma vaga" +
        "\n6-Sair"
    )
    return menu
}

do {
    console.log(vaga[0])
    option = menu()
    switch (option) {
        case "1":
            let confirmação = ""
            let novaVaga = {
                nome: "",
                descrição: "",
                dataLimite: "",
                candidatos: []
            }
            novaVaga.nome = prompt("Qual o nome da vaga? ")
            novaVaga.descrição = prompt("Descreva a vaga: ")
            novaVaga.dataLimite = prompt("Qual a data limite? ")
            confirmacao = confirm(
                "Você comfirma a criação dessa vaga?" +
                "\nNome: " + novaVaga.nome +
                "\nDescrição: " + novaVaga.descrição +
                "\nData limite: " + novaVaga.dataLimite
                )

            if (confirmacao === true) {
                vaga.push(novaVaga)
            }
            break
        case "2":
            if (vaga.length > 0) {
                let candidato = prompt("Qual o nome do candidato: ")
                let indice = parseInt(prompt("Qual o indice da vaga? "))
                confirmacao = confirm(
                    "Você quer se inscrever nesta vaga?" +
                    "\nNome: " + vaga[indice - 1].nome +
                    "\nDescrição: " + vaga[indice - 1].descrição +
                    "\nData limite: " + vaga[indice - 1].dataLimite
                )
    
                if (confirmacao === true) {
                    vaga[indice - 1].candidatos.push(candidato)
                }
                break
            }else {
                alert("Não a vagas disponíveis!!")
                break
            }
        case "3":
            if (vaga.length > 0) {
                let listagem = "Vagas disponíveis: \n"
                for (let i = 0; i < vaga.length; i++) {
                    listagem += 
                    "\n" + (i + 1) + "-" + vaga[i].nome +
                    "\nQuantidade de candidatos: " + vaga[i].candidatos.length + "\n"
                }
                alert(listagem)
                break
            } else {
                alert("Não a vagas disponíveis")
                break
            }
        case "4":
            break
        case "5":
            break
        case "6":
            alert("Finalizando...")
            break
        default:
            alert("Opção inválida tente novamente!!")
    }
} while (option !== "6")