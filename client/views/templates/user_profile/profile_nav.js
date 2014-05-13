Template.profile_nav.helpers({

  username: function() {
    if(document.URL.indexOf("profile") >= 0){
      if (Meteor.user())
        return Meteor.user().profile.name;
    } else {
      if (Meteor.user()) {
        var url = window.location.pathname;
        var id = url.substring(url.lastIndexOf('/') + 1);
        console.log(id);
        var user = Meteor.users.find( { _id: id } );
        if (user.count() == 0)
          return '';
        else
          return user.fetch()[0].profile.name;
      }
    }
  }
});