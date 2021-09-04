const { Type } = require('../model')

const get = (query) => {
  return Type.find(query)
}

const getById = (id) => Type.findById(id)

const add = (newType) => {
  return Type.create(newType)
}

const del = async (id) => {
  try {
    const result = await Type.findByIdAndDelete(id)
    return result
  } catch (err) {
    if (err.message.includes('Cast to ObjectId failed')) {
      return null
    }

    throw err
  }
}

const update = async (id, updateType) => {
  try {
    const result = await Type.findByIdAndUpdate(id, updateType, { new: true })
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
  getById,
  add,
  del,
  update
}
