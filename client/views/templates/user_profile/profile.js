Template.profile.helpers({

  geturl: function() {
    // var url = window.location.pathname;
    // var id = url.substring(url.lastIndexOf('/') + 1);
    // var user = Meteor.users.find( { _id: id } );
    if (Meteor.user() == null)
      return ''
    else
      return Meteor.user().profile.url;
  }

});