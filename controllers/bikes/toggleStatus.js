const { bike: service } = require('../../services')

const toggleStatus = async (req, res, next) => {
  const { id } = req.params
  const { rented } = req.body

  try {
    const rentalTimeStamp = rented ? Date.now() : null
    const returnTimeStamp = rented ? null : Date.now()
    const result = await service.update(id, { rented, rentalTimeStamp, returnTimeStamp })

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

// function msToTime(duration) {
//   let seconds = Math.floor((duration / 1000) % 60)
//   let minutes = Math.floor((duration / (1000 * 60)) % 60)
//   let hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

//   hours = (hours < 10) ? '0' + hours : hours
//   minutes = (minutes < 10) ? '0' + minutes : minutes
//   seconds = (seconds < 10) ? '0' + seconds : seconds

//   return hours + ':' + minutes + ':' + seconds
// }

module.exports = toggleStatus
