'use strict';

var Joi  = require('joi'),
    Task = require('../../../models/task');

module.exports = {
  description: 'Create a Task',
  notes: 'Create a Task',
  tags:['tasks'],
  validate: {
    payload: {
      name: Joi.string().min(1).required(),
      dueDate: Joi.date().min('now').required(),
      isComplete: Joi.boolean().required(),
      priority: Joi.string().length(24).required()
    }
  },
  handler: function(request, reply){
    Task.create(request.payload, function(err, task){
      reply(task);
    });
  }
};
