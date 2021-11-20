const express = require('express')
const exphbs  = require('express-handlebars')
const app = express()
const port = 3000

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')

app.use(express.static('public'))


app.get('/users/login', (req, res) => {
  res.render('login')
})

app.post('/users/login', (req, res) => {
  res.send('login')
})

app.get('/users/register', (req, res) => {
  res.render('register')
})

app.post('/users/register', (req, res) => {
  res.send('register')
})

app.get('/users/logout', (req, res) => {
  res.send('logout')
})

app.get('/', (req, res) => {
  res.render('login')
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})