// HISTORY AND RACEDAY BUTTONS
Template.tipster_stats.isTrue = function() {
  return Session.get('isTrue');
};


Template.tipster_profile.events({
  'click #raceday-button' : function (e, template){
    // alert("raceday");
    Session.set('isTrue', true);
  },

  'click #history-button' : function (e, template){
    // alert("raceday");
    Session.set('isTrue', false);
  }
});

Template.tipster_profile.events({
  'click #follow-button' : function (e, template){

    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);

    if (id !== Meteor.user()._id) {

      for (followee in Meteor.user().profile.race.raceDate.followee) {

        if (id == Meteor.user().profile.race.raceDate.followee[followee]) {

          return console.log("Already following this person");
        }

      }

      Meteor.users.update({_id:Meteor.user()._id}, {$push:{"profile.race.raceDate.followee":id}});

      } else {

      console.log("This is your account");

    }
  }
});

Template.tipster_profile.helpers({

    geturl: function() {
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);
    var user = Meteor.users.find( { _id: id } );
    return user.fetch()[0].profile.url;
  }

});




