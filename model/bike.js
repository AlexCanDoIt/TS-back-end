const { model } = require('mongoose')
const { bikeSchema } = require('./schemas')

const Bike = model('bike', bikeSchema)

module.exports = Bike
