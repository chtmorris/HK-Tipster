Template.profile.helpers({

  score: function() {
    console.log('loggin in: ' + Meteor.loggingIn());
    console.log('user: ' + Meteor.user());
    if (Meteor.user())
      return Meteor.user().profile.score;
    else
      return ''
  }
});

//ADD FOLLOWERS BINDING HERE