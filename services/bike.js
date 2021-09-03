const { Bike } = require('../model')

const get = (query) => {
  return Bike.find(query)
}

const add = (newBike) => {
  return Bike.create(newBike)
}

const del = async (id) => {
  try {
    const result = await Bike.findByIdAndDelete(id)
    return result
  } catch (err) {
    if (err.message.includes('Cast to ObjectId failed')) {
      return null
    }

    throw err
  }
}

const update = async (id, updateBike) => {
  try {
    const result = await Bike.findByIdAndUpdate(id, updateBike, { new: true })
    return result
  } catch (err) {
    if (err.message.includes('Cast to ObjectId failed')) {
      return null
    }

    throw err
  }
}

module.exports = {
  get,
  add,
  del,
  update
}
