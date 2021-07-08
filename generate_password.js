// generate_password.js
// define generatePassword function
function generatePassword() {
  // define things user might want
  const lowerCaseLetter = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbers = '0123456789'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // define dummy data
  const options = {
    length: 12,
    lowercase: 'on',
    uppercase: 'on',
    numbers: 'on',
    excludeCharacters: '40'
  }
  console.log('options', options)
  // create a collection to store things user picked up
  let collection = []
  console.log(options.lowercase)
  if (options.lowercase) {
    collection = collection.concat(...lowerCaseLetter)  //把字串轉成陣列 ...lowerCaseLetter
  }
  if (options.uppercase) {
    collection = collection.concat(upperCaseLetter.split(''))
  }
  if (options.numbers) {
    collection = collection.concat(...numbers)
  }
  if (options.symbols) {
    collection = collection.concat(...symbols)
  }
  console.log(collection)
  // remove things user do not need
  collection = collection.filter(character => !options.excludeCharacters.includes(character))
  console.log('after remove collection', collection)
  // start generating password

  // returnr the generated password
  console.log('This function will generate password')
}
// invoke generatePassword function
generatePassword()