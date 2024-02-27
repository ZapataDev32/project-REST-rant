require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()


// app.set('views', _dirname + '/views')
app.set('view engine', 'jsx')
app.use(methodOverride('_method'))
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))




app.use('/places', require('./controllers/places'))
app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})


app.listen(process.env.PORT)


module.exports = app