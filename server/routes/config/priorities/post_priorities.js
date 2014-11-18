'use strict';

var Joi      = require('joi'),
    Priority = require('../../../models/priority');

module.exports = {
  description: 'Create a Priority',
  notes: 'Create a Priority',
  tags:['priorities'],
  validate: {
    payload: {
      name: Joi.string().min(1).max(10).required(),
      color: Joi.string().length(7).required(),
      value: Joi.number().min(0).max(100).required()
    }
  },
  handler: function(request, reply){
    Priority.create(request.payload, function(err, priority){
      reply(priority);
    });
  }
};
