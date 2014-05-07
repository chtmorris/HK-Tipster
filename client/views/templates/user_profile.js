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

Template.racedayInput.events({'submit form' : function(event, template) {
  event.preventDefault();

  // console.log('hi');
  horse1 = template.find("input[name=horse1]");
  horse2 = template.find("input[name=horse2]");
  horse3 = template.find("input[name=horse3]");

  var data = {

      raceDate : {
        race1 : {
          horse1: horse1.value,
          horse2: horse2.value,
          horse3: horse3.value,
        }
      }
    };


  console.log(data);

  horse1.value="";
  horse2.value="";
  horse3.value="";

  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.race":data}});

}});

// Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.race":{"race_1": "5", "race_2":"10"}}})