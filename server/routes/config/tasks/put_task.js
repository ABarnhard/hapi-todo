'use strict';

var Joi  = require('joi'),
    Task = require('../../../models/task');

module.exports = {
  description: 'Update Task',
  notes: 'Update Task',
  tags:['tasks'],
  validate: {
    params: {
      id: Joi.string().length(24).required()
    },
    payload: {
      isComplete: Joi.boolean().required()
    }
  },
  handler: function(request, reply){
    Task.findByIdAndUpdate(request.params.id, request.payload, function(err, task){
      reply(task);
    });
  }
};
