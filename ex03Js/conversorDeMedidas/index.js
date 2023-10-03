let meters = parseFloat(prompt("Digite um valor em metros: "))
let option = prompt(
    "Escolha uma opção:" +
    "\n1- Milímetro " +
    "\n2- Centímetro " +
    "\n3- Decímetro " +
    "\n4- Decâmetro " +
    "\n5- Hectômetro " +
    "\n6- Quilômetro"
)
    let calculation = 0
switch (option) {
    case "1":
        calculation = meters * 1000
        alert(meters + " metros convertido fica " + calculation + " milímetros")
        break
    case "2":
        calculation = meters * 100
        alert(meters + " metros convertido fica " + calculation + " centimetros")
        break
    case "3":
        calculation = meters * 10
        alert(meters + " metros convertido fica " + calculation + " decímetros")
        break
    case "4":
        calculation = meters / 10
        alert(meters + " metros convertido fica " + calculation + " decâmetros")
        break
    case "5":
        calculation = meters / 100
        alert(meters + " metros convertido fica " + calculation + " hectômetros")
        break
    case "6":
        calculation = meters / 1000
        alert(meters + " metros convertido fica " + calculation + " Quilômetros")
        break
    default:
        alert("Opcão inválida!!")
}