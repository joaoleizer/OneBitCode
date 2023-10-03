const name1 = prompt("Digite o nome do primeiro carro: ")
const velocity1 = prompt("Digite a velocidade do " + name1 + " :")
const name2 = prompt("Digite o nome do segundo carro: ")
const velocity2 = prompt("Digite a velocidade do " + name2 + " :")

if (velocity1 > velocity2) {
    alert("O carro " + name1 + " está mais rápido que o " + name2 + ".")
} else if (velocity2 > velocity1) {
    alert("O carro " + name2 + " está mais rápido que o " + name1 + ".")
}else {
    alert("Os carros estão na mesma velocidade!!")
}