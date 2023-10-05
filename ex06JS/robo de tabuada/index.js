let number = prompt("Qual número deseja ver a tabuada?")
let table = "Tabuada de " + number + "\n"

for (let cont = 1 ; cont <= 20; cont++) {
    table += cont + " x " + number + " = " + (cont * number) + "\n"
}
alert(table)