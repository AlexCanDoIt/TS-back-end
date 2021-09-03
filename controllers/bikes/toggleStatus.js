const { bike: service } = require('../../services')

const toggleStatus = async (req, res, next) => {
  const { id } = req.params
  const { status } = req.body

  try {
    const result = await service.update(id, { status })

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

module.exports = toggleStatus
