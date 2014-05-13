// HISTORY AND RACEDAY BUTTONS
Template.tipster_stats.isTrue = function() {
  return Session.get('isTrue');
};

Template.tipster_profile.events({
  'click #raceday-button' : function (e, template){
    // alert("raceday");
    Session.set('isTrue', true);
  },

  'click #history-button' : function (e, template){
    // alert("raceday");
    Session.set('isTrue', false);
  }
});

