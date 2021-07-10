// generate_password.js
// define generatePassword function
function generatePassword(options) {
  // define things user might want
  const lowerCaseLetter = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbers = '0123456789'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // define dummy data
  // 假資料
  // const options = {
  //   length: 12,
  //   lowercase: 'on',
  //   uppercase: 'on',
  //   numbers: 'on',
  //   // symbols: 'on',
  //   excludeCharacters: 'ABCDEFG'
  // }
  console.log('options', options)
  // create a collection to store things user picked up
  let collection = []
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
  let password = ''
  for (let AmountOfNum = options.length; AmountOfNum > 0; AmountOfNum--) {
    password += sample(collection)
  }
  console.log(password)

  // return the generated password
  return password
}

// define sample function to randomly return an item in an array
function sample(array) {
  let index = Math.floor(Math.random() * array.length)
  return array.slice(index, index + 1)
}

// invoke generatePassword function
// generatePassword()

// export generatePassword function for other files to use
// 會出此函式
module.exports = generatePassword