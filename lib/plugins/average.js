'use strict';

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/average/{nums}',
    config: {
      description: 'Averages numbers',
      handler: function(request, reply){
        var nums = request.params.nums.split(',');
        var sum = nums.reduce(function(acc, num){
          return acc + parseFloat(num);
        }, 0);
        return reply({average: sum/nums.length});
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'average'
};
