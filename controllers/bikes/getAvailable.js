const { bike: service } = require('../../services')

const get = async (req, res, next) => {
  const { query } = req

  try {
    const result = await service.get({ status: 'available', ...query })

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
