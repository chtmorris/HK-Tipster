Template.followbar.helpers({

  isFollowing: function() {

    //TIPSTERS DATA
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);


    //USERS DATA
    // var followee_list = Meteor.user();


    if (Meteor.user()) {
      var followee_list = Meteor.user().profile.race.raceDate.followee;

      for (followee in followee_list) {

        if (followee_list[followee] == id) {

          console.log("isFollow = true");
          return true;
        }
      }
         console.log("isFollow = false");
        return false;

    }
    else {
      console.log("User count = 0");
    }

  }

});