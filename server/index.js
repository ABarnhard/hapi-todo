'use strict';

var Hapi = require('hapi'),
    server = new Hapi.Server(3000);

server.start(function(){
    console.log('Server running at:', server.info.uri);
});
