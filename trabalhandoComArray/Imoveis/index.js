let option = ""
let imoveis = []

do {
    option = prompt(
        "Imóveis Leizer" +
        "\nQuantidade de imóveis: " + imoveis.length +
        "\n1-Cadastrar imóvel" +
        "\n2-Mostrar imóveis" +
        "\n3-Sair"
    )

    switch (option) {
        case "1":
            let imovel = {}
            imovel.name = prompt("Qual o nome do imovel? ")
            imovel.bedrooms = prompt("Quantos quartos possuí? ")
            imovel.bathroom = prompt("Quantos banheiros possuí? ")
            imovel.garage = prompt("Possuí garagem?(sim/nao) ")

            let confirm = confirm(
                "Deseja salvar este imóvel? " +
                "\nNome: " + imovel.name +
                "\nQuartos: " + imovel.bedrooms +
                "\nBanheiros: " + imovel.bathroom +
                "\nGaragem: " + imovel.garage
            )

            if (confirm === true) {
                imoveis.push(imovel)
            }
            break
        case "2":
            let registered = ""
            for (let i = 0; i < imoveis.length; i++) {
                registered += "\n" + imoveis[i].name + "\n"
                registered += "Quartos: " + imoveis[i].bedrooms + "\n"
                registered += "Banheiros: " + imoveis[i].bathroom + "\n"
                registered += "Possuí garagem? " + imoveis[i].garage + "\n"
            }
            if (registered.length > 0) {
                alert(registered)
            } else {
                alert("Não a imoveís cadastrados!")
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida, tente novamente!!")
    }
} while (option !== "3")