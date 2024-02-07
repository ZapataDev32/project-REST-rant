const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', {places}) 
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req,res) => {
    res.render('places/show', {place})
})
  
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})
  

// router.post('/', (req, res) => {
//     console.log(req.body)
//     // places.push(req.body)
//     res.redirect('/places')
// })

module.exports = router


  