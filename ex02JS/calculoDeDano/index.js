const name1 = prompt("Qual o nome do primeiro guerreiro? ")
const attack = parseFloat(prompt("Qual o poder de ataque: "))
const name2 = prompt("Qual o nome do defensor? ")
let life = parseFloat(prompt("Quantos pontos de vida ele tem? "))
const defense = parseFloat(prompt("Qual o poder de defesa? "))
const shield = prompt("Ele possui escudo?(s/n) ")

if (attack > defense && shield === "n") {
    const damage = attack - defense
    life -= damage 
    alert(name2 + " levou " + damage + " de dano, ficando com " + life + " de vida!")
    if (life <= 0) {
        alert(name2 + " levou um golpe muito forte e morreu!")
    }
}else if (attack > defense && shield === "s") {
    const damage = (attack - defense) / 2
    life -= damage
    alert(name2 + " levou " + damage + " de dano, ficando com " + life + " de vida!")
    if (life <= 0) {
        alert(name2 + " levou um golpe muito forte e morreu!")
    }
}else {
    alert(name2 + " se defendeu com maestria e não levou dano!")
}