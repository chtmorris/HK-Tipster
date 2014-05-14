Template.raceday.helpers ({

  followee: function() {
    var followee_ids = [];
    var user = Meteor.user();

    if (user) {

      for (id in Meteor.user().profile.race.raceDate.followee) {
        followee_ids.push(Meteor.user().profile.race.raceDate.followee[id]);
      }
      console.log(followee_ids);

    }


    return followee_ids;
    // return ["AgsNmjvTNv3WoroCi"];


    // if (Meteor.user()) {
    //   for (id in Meteor.user().profile.race.raceDate.followee) {
    //     followee_ids.push(Meteor.user().profile.race.raceDate.followee[id]);
    //   }
    // } else {

    // console.log(followee_ids);
    // console.log("no user");
    // }



    }

    // myParam: function() {

    //   return _.extend({paramName: "123"},this);
    // }

});

Template.followee_picks.helpers ({

  getHorse: function(race, horse, id) {

    var user = Meteor.users.find( { _id: id } );
    if (user.count() == 0)
      return '';
    else
      return user.fetch()[0].profile.race.raceDate[race][horse];
  }
});





