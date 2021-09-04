const express = require('express')
const { validateMiddleware } = require('../../middleware')
const { validateType } = require('../../model/schemas')
const { types: ctrl } = require('../../controllers')
const router = express.Router()

router.get('/', ctrl.get)

router.post('/', express.json(), validateMiddleware(validateType), ctrl.add)

router.delete('/:id', ctrl.del)

module.exports = router
