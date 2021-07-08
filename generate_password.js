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

  // remove things user do not need

  // start generating password

  // returnr the generated password
  console.log('This function will generate password')
}
// invoke generatePassword function
generatePassword()