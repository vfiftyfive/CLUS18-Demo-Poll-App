Meteor.apply('server-ip', [], function(error,result){
  if (error) {
    console.log(error);
  }
  else {
    Session.set('serverIp', result);
  }
});

Template.displayIP.helpers({
  getServerIp: function(){
    var sessionVar = Session.get('serverIp');
    console.log(sessionVar);
    return sessionVar[0]['address'];
  }
});


