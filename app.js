// require related modules used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// set templat engine and bootstrap
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

// localhost : 3000
app.get('/', (req, res) => {
  res.render('index')
})


app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`)
})