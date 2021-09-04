const { Schema } = require('mongoose')
const Joi = require('joi')

const typeSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for type']
  },
},
{
  versionKey: false,
  timestamps: true
})

const validateType = (newType) => {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
  })
  const { error } = schema.validate(newType)
  return error
}

module.exports = { typeSchema, validateType }
