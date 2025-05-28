const Joi = require('joi');
const listingSchema = Joi.object({

    listing:Joi.object({
    name:Joi.string()
    .min(3)
    .max(30)
    .required(),

    description:Joi.string()
    .min(3)
    .max(30)
    .required(),

    image: Joi.string().uri().allow(""),

    price:Joi.number()
    .min(0)
    .required(),
  
    isAvailable:Joi.boolean()
    .required(),

    rating:Joi.number()
    }).required()

});

module.exports=listingSchema;