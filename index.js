require('dotenv').config()
const express = require('express')
const methodOvveride = require('method-override')
const app = express()

// app.set('views', _dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(methodOvveride('_method'))



app.use('/places', require('./controllers/places'))
app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})


app.listen(process.env.PORT)
