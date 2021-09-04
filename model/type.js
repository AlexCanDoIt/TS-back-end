const { model } = require('mongoose')
const { typeSchema } = require('./schemas')

const Type = model('type', typeSchema)

module.exports = Type
