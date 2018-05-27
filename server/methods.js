  var os = Npm.require('os');
  
  var getIp = function() {
    // Get interfaces
    var netInterfaces = os.networkInterfaces();
    // Result
    var result = [];
    for (var id in netInterfaces) {
      var netFace = netInterfaces[id];

      for (var i = 0; i < netFace.length; i++) {
        var ip = netFace[i];
        if (ip.internal === false && ip.family === 'IPv4') {
          result.push(ip);
        }
      }
    }
    return result;
  };

  Meteor.methods({
    'server-ip': function() {
      return getIp();
    }
  });
