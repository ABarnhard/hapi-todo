'use strict';

var mongoose = require('mongoose');

module.exports = mongoose.model('Priority', {
                                              name:  {type: String, required: true, validate: [nameV, 'name length']},
                                              color: {type: String, required: true, validate: [colorV, 'color length']},
                                              value: {type: Number, required: true, min: 0, max: 100}
                                            });

function nameV(v){
  return v.length > 0 && v.length < 11;
}

function colorV(v){
  return v.length === 7;
}
