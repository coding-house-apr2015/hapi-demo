'use strict';

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/ss/{nums}',
    config: {
      description: 'Computes the sum of squares',
      handler: function(request, reply){
        var ss = request.params.nums.split(',')
                   .map(function(n){return n * n;})
                   .reduce(function(p, c){return p + c;});

        return reply({ss: ss});
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'ss'
};
