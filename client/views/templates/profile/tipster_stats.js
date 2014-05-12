Template.tipster_tips.helpers({

  horse1_race1: function() {
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);
    var user = Meteor.users.find( { _id: id } );
    if (user.count() == 0)
      return '';
    else
      return user.fetch()[0].profile.race.raceDate.race1.horse_1;
  }
});