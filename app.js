// require related modules used in the project
// Include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
// const bodyParser = require('body-parser')  //Express 版本升級 4.17.1 後，已內建 body-parser,故可省略
const app = express()
const port = 3000
const generatePassword = require('./generate_password')

// set templat engine and bootstrap and body-parser
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
// app.use(bodyParser.urlencoded({ extended: true })) //Express 版本升級 4.17.1 後，已內建 body-parser，故可省略
app.use(express.urlencoded({ extended: true }))   //這行程式碼擺放的順序需要在所有路由設定之前。

// localhost : 3000
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log('random password is: ', generatePassword(req.body))
  const password = generatePassword(req.body)
  res.render('index', { password: password })
})


app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`)
})