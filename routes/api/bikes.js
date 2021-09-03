const express = require('express')
const { validateMiddleware } = require('../../middleware')
const { validateBike } = require('../../model/schemas')
const { bikes: ctrl } = require('../../controllers')
const router = express.Router()

router.get('/available', ctrl.getAvailable)

router.get('/rented', ctrl.getRented)

router.post('/', express.json(), validateMiddleware(validateBike), ctrl.add)

router.delete('/:id', ctrl.del)

router.patch('/:id/status', express.json(), ctrl.toggleStatus)

module.exports = router
