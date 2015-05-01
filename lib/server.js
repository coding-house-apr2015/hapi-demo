'use strict';

var Hapi = require('hapi');
var World = require('./plugins/world');
var Version = require('./plugins/version');
var Generic = require('./plugins/generic');
var Add = require('./plugins/add');
var Average = require('./plugins/average');
var Ss = require('./plugins/ss');
var Blipp = require('blipp');
var Good = require('./plugins/good');
var Quote = require('./plugins/quote');
var Mongoose = require('mongoose');

exports.init = function(port, next){
  var server = new Hapi.Server();

  server.connection({port: port});
  Mongoose.connect(process.env.MONGO_URL);

  Mongoose.connection.once('open', function(){
    server.register([Blipp, Good, Quote, World, Version, Generic, Add, Average, Ss], function(err){
      if(err){return next(err);}

      server.start(function(err){
        return next(err, server);
      });
    });
  });
};
