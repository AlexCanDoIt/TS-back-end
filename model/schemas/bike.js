const { Schema } = require('mongoose')
const Joi = require('joi')

const bikeSchema = Schema({
  name: {
    type: String,
    minlength: 2,
    required: [true, 'Set name for bike']
  },
  type: {
    type: Schema.Types.ObjectId,
    ref: 'type',
    required: [true, 'Set type for bike']
  },
  price: {
    type: Number,
    min: 0.01,
    required: [true, 'Set price for bike']
  },
  rented: {
    type: Boolean,
    default: false
  },
  rentalTimeStamp: {
    type: Number,
    default: null
  },
  returnTimeStamp: {
    type: Number,
    default: null
  },
},
{
  versionKey: false,
  timestamps: true
})

const validateBike = (newBike) => {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    type: Joi.string().required(),
    price: Joi.number().min(0.01).required(),
    rented: Joi.boolean()
  })
  const { error } = schema.validate(newBike)
  return error
}

module.exports = { bikeSchema, validateBike }
