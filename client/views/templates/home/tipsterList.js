Template.home.helpers({
  tipster: function() {
    var data = [];

    Meteor.users.find().forEach( function(obj) {
      p1 = {
        tipsterName: obj.profile.name,
        score: obj.profile.score,
        _id: obj._id
      };

      data.push(p1);
    });
//
    return data;
  }
});