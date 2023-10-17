let option = ""
let resultado = 0

function areaTriangulo(base, altura) {
    return base * altura / 2
}

function areaRetangulo(base, altura) {
    return base * altura
}

function areaQuadrado(lado) {
    return lado ** 2
}

function areaTrapezio(baseMA, baseMe, altura) {
    return (baseMA + baseMe) * altura / 2
}

function areaCirculo(raio) {
    return 3.14 * raio
}
do {
    option = prompt(
        "Calculadora geométrica\n" +
        "Escolha uma Opção:" +
        "\n1-Área do triângulo " +
        "\n2-Área do retângulo " +
        "\n3-Área do quadrado " +
        "\n4-Área do trapézio " +
        "\n5-Área do círculo " +
        "\n6-Sair "
    )
    
    switch (option) {
        case "1":
            resultado = areaTriangulo(
                prompt("Qual tamanho da base?"), 
                prompt("Qual tamanho da altura?")
            )
            alert("A área do triângulo é " + resultado)
            break
        case "2":
            resultado = areaRetangulo(
                prompt("Qual tamanho da base? "),
                prompt("Qual tamanho da altura? ")
            )
            alert("A área do retângulo é " + resultado)
            break
        case "3":
            resultado = areaQuadrado(
                prompt("Qual o tamanho dos lados? "),
            )
            alert("A área do quadrado é " + resultado)
            break
        case "4":
            resultado = areaTrapezio(
                parseInt(prompt("Qual tamanho da base maior? ")),
                parseInt(prompt("Qual o tamanho da base menor?")),
                prompt("Qual o tamanho da altura? ")
            )
            alert("A área do trapézio é " + resultado)
            break
        case "5":
            resultado = areaCirculo(
                prompt("Qual o raio do circulo? ")
            )
            alert("A área do circulo é " + resultado)
            break
        case "6":
            alert("Encerrando...")
            break
        default:
            alert("A opção escolhida é inválida tente novamente!!")
    }
}   while (option !== "6")