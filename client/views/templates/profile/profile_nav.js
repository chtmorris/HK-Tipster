tipsterName = Meteor.users.findOne().profile.name;

Template.profile_nav.helpers({

  username: function() {
    if(document.URL.indexOf("profile") >= 0){
      if (Meteor.user())
        return Meteor.user().profile.name;
    } else {
        console.log("not profile");
        console.log(tipsterName);
        return tipsterName;
    }
  }
});