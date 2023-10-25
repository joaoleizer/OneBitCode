function show() {
    //Obter um elemento a partir do seu id
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    //Obter vários elementos (HTMLCollection) a partir de nome de tag
    const liElement = document.getElementsByTagName('li')
    console.log(liElement)

    //Obter vários elementos (NodeList) a partir do atributo name
    const contact1 = document.getElementsByName('contact1')
    console.log(contact1)

    //Obter varios elementos (NodeList) a partir de uma query
    const contacts = document.querySelectorAll('#contact-list > li > label')
    console.log(contacts)

    //Obter um elemento a partir de uma query
    const contact = document.querySelector('#contact-list > li > label')
    console.log(contact)

    //Obter varios elementos (HTMLCollection) a partir de uma class name
    const contactInput = document.getElementsByClassName('contact-input')
    console.log(contactInput)
}