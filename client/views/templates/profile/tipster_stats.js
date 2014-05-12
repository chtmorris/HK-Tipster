Template.tipster_tips.helpers({

    getHorse: function(race, horse) {
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);
    var user = Meteor.users.find( { _id: id } );
    if (user.count() == 0)
      return '';
    else
      return user.fetch()[0].profile.race.raceDate[race][horse];
  }

});

