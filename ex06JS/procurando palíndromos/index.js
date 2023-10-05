let word = prompt("Digite uma palavra: ")
let inverse = ""

for (let cont = word.length - 1; cont > -1; cont--) {
    inverse += word[cont]
}

if (word === inverse) {
    alert("Esta palavra é um palíndromo!!")
} else {
    alert(word + " não é um palíndromo, pois de trás para frente ele fica " + inverse)
}