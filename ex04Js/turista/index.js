const name = prompt("Qual o seu nome? ")
let visited = prompt("Você ja visitou alguma cidade?(s/n) ")
let number = 0
let citys = ""

while (visited === "s") {
    citys += prompt("Qual o nome da cidade? ") + "\n" 
    number++
    visited = prompt("Você visitou alguma outra cidade?(s/n) ")
}
if (number !== 0) {
    alert(
        "Cidade visitadas por " + name +
        "\n" + citys +
        "\nAo todo foram " + number + " Cidades."
    )
} else {
    alert(
        "\n" + name + " não visitou nenhuma cidade."
    )
}