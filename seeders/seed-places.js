const db = require('../models')

db.Place.deleteMany({})
.then(() => {
    console.log('Existing places deleted successfully')


db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'https://placekitten.com/300/300',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'https://placekitten.com/200/300',
    founded: 2020
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})
.catch(err => {
    console.error('Failures', err)
    process.exit(1)
})
})

