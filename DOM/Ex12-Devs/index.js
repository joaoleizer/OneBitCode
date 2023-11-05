function createLabel(text, htmlFor) {
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText= text
    return label
}

function createInput(name, id, value, placeholder, type = 'text') {
    const input = document.createElement('input')
    input.name = name
    input.id = id
    input.value = value
    input.type = type
    input.placeholder = placeholder
    return input
}

const form = document.getElementById('register')
const newTec = document.getElementById('newTec')
const developers = []
let inputRows = 0

newTec.addEventListener('click', function () {
    const stackInputs = document.getElementById('stackInputs')
    const br = document.createElement('br')

    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++

    newRow.id = 'inputRow-' + rowIndex
    newRow.className = 'inputRow'

    const techNameLabel = createLabel('nome: ', 'techName-' + rowIndex)
    const techNameInput = createInput('techName', 'techName-' + rowIndex, null, 'Nome da tecnologia.')

    const expLabel = createLabel('experiência: ')
    const id1 = 'expRadio-' + rowIndex + '.1'
    const expRadio1 = createInput('techExp-' + rowIndex, id1, '0-2 Anos', null, 'radio')
    const expLabel1 = createLabel('0-2 anos', id1)
    const id2 = 'expRadio-' + rowIndex + '.2'
    const expRadio2 = createInput('techExp-' + rowIndex, id1, '3-4 Anos', null, 'radio')
    const expLabel2 = createLabel('3-4 anos', id1)
    const id3 = 'expRadio-' + rowIndex + '.3'
    const expRadio3 = createInput('techExp-' + rowIndex, id1, '5+ Anos', null, 'radio')
    const expLabel3 = createLabel('5+ anos', id1)

    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click', function() {
        stackInputs.removeChild(newRow)
    })

    newRow.append(techNameLabel, techNameInput, br, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn)
    stackInputs.appendChild(newRow)

})

form.addEventListener('submit', function (ev) {
    ev.preventDefault()
    
    const fullName = document.getElementById('name')
    const inputRows = document.querySelectorAll('.inputRow')

    let technologies = []
    inputRows.forEach(function (row) {
        const techName = document.querySelector('#' + row.id + " input[name='techName']").value
        const techExp = document.querySelector('#' + row.id + " input[type='radio']:checked").value
        technologies.push({name: techName, exp: techExp})
    })

    const newDev = {fullName: fullName.value, technologies: technologies}
    developers.push(newDev)
    alert('Dev cadastrado com sucesso!!')

    fullName.value = ''
    inputRows.forEach(function (row) {
        row.remove()
    })

    console.log(developers)
})