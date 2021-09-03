const getAvailable = require('./getAvailable')
const getRented = require('./getRented')
const add = require('./add')
const del = require('./del')
const toggleStatus = require('./toggleStatus')

module.exports = {
  getAvailable,
  getRented,
  add,
  del,
  toggleStatus
}
