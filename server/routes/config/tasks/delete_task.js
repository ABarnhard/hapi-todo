'use strict';

var Joi  = require('joi'),
    Task = require('../../../models/task');

module.exports = {
  description: 'Delete Task',
  notes: 'Delete Task',
  tags:['tasks'],
  validate: {
    params: {
      id: Joi.string().length(24).required()
    }
  },
  handler: function(request, reply){
    Task.findByIdAndRemove(request.params.id, function(err, task){
      reply(task);
    });
  }
};
