'use strict';

var Priority = require('../../../models/priority');

module.exports = {
  description: 'Get Priorities',
  notes: 'Get Priorities',
  tags:['priorities'],
  handler: function(request, reply){
    Priority.find(function(err, priorities){
      reply({priorities:priorities});
    });
  }
};
