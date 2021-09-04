const { bike: bikeService, type: typeService } = require('../../services')

const add = async (req, res, next) => {
  const { body } = req

  try {
    const result = await bikeService.add(body)
    const { name: typeName } = await typeService.getById(body.type)

    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result: {
          ...result._doc,
          type: typeName
        },
      }
    })
  } catch (err) {
    next(err)
  }
}

module.exports = add
