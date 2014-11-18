'use strict';

var Joi = require('joi');

module.exports = {
  description: 'Create a Priority',
  notes: 'Create a Priority',
  tags:['priorities'],
  validate: {
    payload: {
      name: Joi.string().min(1).max(10).required(),
      color: Joi.string().length(7),
      value: Joi.number().min(0).max(100)
    }
  },
  handler: function(request, reply){
    reply({data:'create pri'});
  }
};
