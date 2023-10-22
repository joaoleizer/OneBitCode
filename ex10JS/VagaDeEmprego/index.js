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

function criarVaga() {
    let confirmacao = ""
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
        alert("Vaga criada!")
    }
}

function novoCandidato() {
    if (vaga.length > 0) {
        let candidato = prompt("Qual o nome do candidato: ")
        let indice = parseInt(prompt("Qual o indice da vaga? "))

        if ( indice - 1 >= vaga.length || indice < 0) {
            alert("Indice inválido!!")
        }else {
            confirmacao = confirm(
                "Você quer se inscrever nesta vaga?" +
                "\nNome: " + vaga[indice - 1].nome +
                "\nDescrição: " + vaga[indice - 1].descrição +
                "\nData limite: " + vaga[indice - 1].dataLimite
            )
    
            if (confirmacao === true) {
                vaga[indice - 1].candidatos.push(candidato)
            }
        }
    }else {
        alert("Não a vagas disponíveis!!")
    }
}

function listarVagas() {
    if (vaga.length > 0) {
        const vagasEmTexto = vaga.reduce(function (textoFinal, vaga, indice) {
            textoFinal += (indice + 1) + "-" + vaga.nome
            textoFinal += " (" + vaga.candidatos.length + " Candidatos)\n"
            return textoFinal
        }, "")
        alert(vagasEmTexto)
    } else {
        alert("Não a vagas disponíveis")
    }
}

function VisualizarVaga() {
    if (vaga.length > 0){
        indice = parseInt(prompt("Qual o indice da vaga? "))

        if (indice - 1 >= vaga.length || indice < 0) {
            alert("Indice inválido!!")
        } else {
            const candidatosEmTexto = vaga[indice - 1].candidatos.reduce(function (textoFinal, candidato) {
                return textoFinal + "\n- " + candidato
            }, "")
    
            alert(        
            "Vaga escolhida: " +
            "\n" + indice + "-" + vaga[indice - 1].nome +
            "\nDescrição: " + vaga[indice - 1].descrição +
            "\nData limite: " + vaga[indice - 1].dataLimite +
            "\nQuantidade de candidatos: " + vaga[indice - 1].candidatos.length +
            "\nCandidatos inscritos:" + candidatosEmTexto)
        }
    }else {
        alert("Não a vagas disponíveis!!")
    }
}

function excluirVaga() {
    if (vaga.length > 0) {
        indice = parseInt(prompt("Qual o indice da vaga que deseja excluir? "))

        if (indice - 1 >= vaga.length || indice < 0) {
            alert("Indice inválido!!")
        } else {
            confirmacao = confirm(
                "Deseja excluir essa vaga? " +
                "\nNome: " + vaga[indice - 1].nome +
                "\nDescrição: " + vaga[indice - 1].descrição +
                "\nData limite: " + vaga[indice - 1].dataLimite +
                "\nNúmero de candidatos: " + vaga[indice - 1].candidatos.length
            )
        
            if (confirmacao === true) {
               vaga.splice(indice - 1, 1)
            }
        }
    }else {
        alert("Não a vagas para excluir!!")
    }
}

do {
    option = menu()
    switch (option) {
        case "1":
            criarVaga()
            break
        case "2":
            novoCandidato()
            break
        case "3":
            listarVagas()
            break
        case "4":
            VisualizarVaga()
            break
        case "5":
            excluirVaga()
            break
        case "6":
            alert("Finalizando...")
            break
        default:
            alert("Opção inválida tente novamente!!")
    }

} while (option !== "6")