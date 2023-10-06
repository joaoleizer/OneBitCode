const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

//Adcionar Elementos
//push: Vai adcionar um elemento ao final da array e devolve o tamanho do array
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

//unshift: Vai adcionar um elemento ao começo do array e devolve o novo tamanho do array
tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

//Removendo elementos
//pop: Remove o ultimo elemento do array e devolve o elemento removido
let elementoRemovido = arr.pop()
console.log(elementoRemovido)
console.log(arr)

//shift: Remove o primeiro elemento do array e devolve o elemento removido
elementoRemovido = arr.shift()
console.log(elementoRemovido)
console.log(arr)

//Pesquisando elementos
//includes: Verifica se um certo elemento esta presente no array e retorna true ou false
const inclui = arr.includes("Frodo")
console.log(inclui)

//indexOf: Encontra o indice que possui o elemento indicado, ou -1 caso ele não exista no array
const indice = arr.indexOf("Gandalf")
console.log(indice)

//Cortando e concatenando
//slice: copia uma parte do array e devolve a parte copiada sem alterar o array original
const hobbits = arr.slice(0, 4)
//Tambem pode ser usado com números negativos referenciar o final do array
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

//concat: Junta dois ou mais arrays e/ou itens e devolve o resultado(Sem alterar o array original)
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)
console.log(hobbits)
console.log(outros)

//Substituindo elementos
//splice: Permite remover elementos em qualquer posição do arrey e substituir por novos e retorna os removidos
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(elementosRemovidos)
console.log(sociedade)

//Iterando sobre os elementos
//Usando o for para percorrer cada elemento do array
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
}