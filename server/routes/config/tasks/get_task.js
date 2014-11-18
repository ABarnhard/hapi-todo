'use strict';

var Joi  = require('joi'),
    Task = require('../../../models/task');

module.exports = {
  description: 'Show Task',
  notes: 'Show Task',
  tags:['tasks'],
  validate: {
    params: {
      id: Joi.string().length(24).required()
    }
  },
  handler: function(request, reply){
    Task.findOne({_id:request.params.id}).populate('priority').exec(function(err, task){
      reply(task);
    });
  }
};
