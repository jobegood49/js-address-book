let contacts = [
  {
    id: 1,
    name: 'Mario Rizki',
    phone: 08170209641,
  },
  {
    id: 2,
    name: 'Fadhila Fajrin Bramantio',
    phone: 082112342326,
  },
  {
    id: 3,
    name: 'Bara Limbong',
    phone: +17787231858,
  },
  {
    id: 4,
    name: 'Jonathan Nicolas ',
    phone: 085770346560,
  },
  {
    id: 5,
    name: 'Muhammad Fahrianda',
    phone: +6285297161214,
  },
  {
    id: 6,
    name: 'Sakti Dewantoro',
    phone: +6285743820777,
  },
]
let currentId = 6
let addressBook = {
  displayContacts: contacts => {
    contacts.forEach(contact => console.log(contact))
  },
  addContact: contact => {
    currentId += 1
    contact.id = currentId
    contacts.push(contact)
  },
}

addressBook.displayContacts(contacts)

addressBook.addContact({
  name: 'toto',
  number: 'toto-number',
})

addressBook.displayContacts(contacts)
