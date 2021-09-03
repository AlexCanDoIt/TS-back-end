const { Schema } = require('mongoose')
const Joi = require('joi')

const bikeSchema = Schema({
  name: {
    type: String,
    minlength: 2,
    required: [true, 'Set name for bike']
  },
  type: {
    type: String,
    enum: ['custom', 'road', 'mountain'],
    default: 'custom'
  },
  price: {
    type: Number,
    min: 0.01,
    required: [true, 'Set price for bike']
  },
  status: {
    type: String,
    enum: ['available', 'rented'],
    default: 'available'
  },
},
{
  versionKey: false,
  timestamps: true
})

const validateBike = (newBike) => {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    type: Joi.string(),
    price: Joi.number().min(0.01).required(),
    status: Joi.string()
  })
  const { error } = schema.validate(newBike)
  return error
}

module.exports = { bikeSchema, validateBike }
