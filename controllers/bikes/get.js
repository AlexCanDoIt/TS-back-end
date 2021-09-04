const { bike: bikeService, type: typeService } = require('../../services')

const get = async (req, res, next) => {
  const { query } = req

  try {
    const bikes = await bikeService.get(query)
    const types = await typeService.get()
    const result = bikes.map(bike => {
      const typeObj = types.find(type => String(type._id) === String(bike.type))
      return {
        ...bike._doc,
        type: typeObj
      }
    })

    res.json({
      status: 'success',
      code: 200,
      data: {
        result
      }
    })
  } catch (err) {
    next(err)
  }
}

module.exports = get
