function addPlayer() {
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    const confirmation = confirm("Escalar " + name + " como " + position + " ?")

    if (confirmation) {
        const lineUp = document.getElementById('lineUp')
        const playerItem = document.createElement('li')

        playerItem.id = "player-" + number
        playerItem.innerText = position + ": " + name + "(" + number + ")"
        lineUp.appendChild(playerItem)

    }
    document.getElementById('position').value = ""
    document.getElementById('name').value = ""
    document.getElementById('number').value = ""
}

function removePlayer() {
    const number = document.getElementById('numberToRemove').value 
    const numberToRemove = document.getElementById('player-' + number)

    const confirmation = confirm("Remover o jogador " + numberToRemove.innerText + "?")

    if (confirmation) {
        numberToRemove.remove()
    }
    document.getElementById('numberToRemove').value = ""
}

