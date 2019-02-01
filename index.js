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
    if (!contact.name || !contact.phone)
      return console.log('name or phone is missing')
    currentId += 1
    contact.id = currentId
    contacts.push(contact)
  },
  searchContact: name => {
    let foundContact = contacts.filter(contact => {
      return contact[name] === name
    })
    console.log(foundContact)
    console.log('Details of the person are :', foundContact)
  },
}

addressBook.displayContacts(contacts)

addressBook.addContact({
  number: 'toto-number',
})

addressBook.addContact({
  name: 'toto',
  phone: 'toto-number',
})

addressBook.displayContacts(contacts)

addressBook.searchContact('Jonathan Nicolas')
