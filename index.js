let contacts = [
  {
    id: 1,
    name: 'Mario Rizki',
    phone: '08170209641',
  },
  {
    id: 2,
    name: 'Fadhila Fajrin Bramantio',
    phone: '082112342326',
  },
  {
    id: 3,
    name: 'Bara Limbong',
    phone: '+17787231858',
  },
  {
    id: 4,
    name: 'Jonathan Nicolas ',
    phone: '085770346560',
  },
  {
    id: 5,
    name: 'Muhammad Fahrianda',
    phone: '+6285297161214',
  },
  {
    id: 6,
    name: 'Sakti Dewantoro',
    phone: '+6285743820777',
  },
]

let currentId = 6
const contactList = document.getElementById('contact-list')

let addressBook = {
  displayContacts: contacts => {
    contacts.forEach(contact => {
      const liAddressBook = document.createElement('li')
      const text = document.createTextNode(
        'name: ' + contact.name + '/' + 'phone: ' + contact.phone
      )
      liAddressBook.appendChild(text)
      contactList.appendChild(liAddressBook)
    })
  },

  addContact: event => {
    event.preventDefault()
    const newContactName = document.getElementById('full-name').value
    const newContactPhone = document.getElementById('phone-number').value

    if (!newContactName || !newContactPhone) {
      alert('either name and phone is missing')
    } else {
      currentId += 1
      contacts.push({
        id: currentId,
        name: newContactName,
        phone: newContactPhone,
      })
      contactList.innerHTML = ''

      addressBook.displayContacts(contacts)
    }
  },

  searchContactByName: name => {
    const foundContact = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(name.toLowerCase())
    })
    console.log('Details of the person are :', foundContact)
  },
}

addressBook.displayContacts(contacts)
