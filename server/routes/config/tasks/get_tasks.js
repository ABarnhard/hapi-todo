'use strict';

var Task = require('../../../models/task');

module.exports = {
  description: 'All Tasks',
  notes: 'All Tasks',
  tags:['tasks'],
  handler: function(request, reply){
    Task.find().populate('priority').exec(function(err, tasks){
      reply({tasks:tasks});
    });
  }
};
