'use strict';

module.exports = {
  description: 'About',
  notes: 'The About page',
  tags:['home'],
  handler: function(request, reply){
    reply({data:'About Page'});
  }
};
