'use strict';

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/add/{x}/{y}',
    config: {
      description: 'Adds two numbers',
      handler: function(request, reply){
        var x = parseFloat(request.params.x);
        var y = parseFloat(request.params.y);
        return reply({sum: x+y});
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'add'
};
