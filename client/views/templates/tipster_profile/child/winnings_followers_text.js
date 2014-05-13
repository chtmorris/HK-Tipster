Template.winnings_followers_text.helpers({

  score: function() {
    if (Meteor.user())
      return Meteor.user().profile.score;
    else
      return ''
  }
});

//ADD FOLLOWERS BINDING HERE