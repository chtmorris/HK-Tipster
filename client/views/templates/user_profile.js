Template.userProfile.isTrue = function() {
  return Session.get('isTrue');
};

// Template.history.list = function() {
//   Histories
// }

Template.profile.events({
  'click #raceday-button' : function (e, template){
    // alert("raceday");
    Session.set('isTrue', true);
  },

  'click #history-button' : function (e, template){
    // alert("raceday");
    Session.set('isTrue', false);
  }
});