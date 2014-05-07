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

  horse1_race1 = template.find("input[name=horse1_race1]");
  horse2_race1 = template.find("input[name=horse2_race1]");
  horse3_race1 = template.find("input[name=horse3_race1]");
  horse4_race1 = template.find("input[name=horse4_race1]");

  horse1_race2 = template.find("input[name=horse1_race2]");
  horse2_race2 = template.find("input[name=horse2_race2]");
  horse3_race2 = template.find("input[name=horse3_race2]");
  horse4_race2 = template.find("input[name=horse4_race2]");

  horse1_race3 = template.find("input[name=horse1_race3]");
  horse2_race3 = template.find("input[name=horse2_race3]");
  horse3_race3 = template.find("input[name=horse3_race3]");
  horse4_race3 = template.find("input[name=horse4_race3]");

  horse1_race4 = template.find("input[name=horse1_race4]");
  horse2_race4 = template.find("input[name=horse2_race4]");
  horse3_race4 = template.find("input[name=horse3_race4]");
  horse4_race4 = template.find("input[name=horse4_race4]");

  horse1_race5 = template.find("input[name=horse1_race5]");
  horse2_race5 = template.find("input[name=horse2_race5]");
  horse3_race5 = template.find("input[name=horse3_race5]");
  horse4_race5 = template.find("input[name=horse4_race5]");

  horse1_race6 = template.find("input[name=horse1_race6]");
  horse2_race6 = template.find("input[name=horse2_race6]");
  horse3_race6 = template.find("input[name=horse3_race6]");
  horse4_race6 = template.find("input[name=horse4_race6]");

  horse1_race7 = template.find("input[name=horse1_race7]");
  horse2_race7 = template.find("input[name=horse2_race7]");
  horse3_race7 = template.find("input[name=horse3_race7]");
  horse4_race7 = template.find("input[name=horse4_race7]");

  horse1_race8 = template.find("input[name=horse1_race8]");
  horse2_race8 = template.find("input[name=horse2_race8]");
  horse3_race8 = template.find("input[name=horse3_race8]");
  horse4_race8 = template.find("input[name=horse4_race8]");


  var data = {

      raceDate : {
        race1 : {
          horse_1: horse1_race1.value,
          horse_2: horse2_race1.value,
          horse_3: horse3_race1.value,
          horse_4: horse4_race1.value,
        },
        race2 : {
          horse_1: horse1_race2.value,
          horse_2: horse2_race2.value,
          horse_3: horse3_race2.value,
          horse_4: horse4_race2.value,
        },
        race3 : {
          horse_1: horse1_race3.value,
          horse_2: horse2_race3.value,
          horse_3: horse3_race3.value,
          horse_4: horse4_race3.value,
        },
        race4 : {
          horse_1: horse1_race4.value,
          horse_2: horse2_race4.value,
          horse_3: horse3_race4.value,
          horse_4: horse4_race4.value,
        },
        race5 : {
          horse_1: horse1_race5.value,
          horse_2: horse2_race5.value,
          horse_3: horse3_race5.value,
          horse_4: horse4_race5.value,
        },
        race6 : {
          horse_1: horse1_race6.value,
          horse_2: horse2_race6.value,
          horse_3: horse3_race6.value,
          horse_4: horse4_race6.value,
        },
        race7 : {
          horse_1: horse1_race7.value,
          horse_2: horse2_race7.value,
          horse_3: horse3_race7.value,
          horse_4: horse4_race7.value,
        },
        race8 : {
          horse_1: horse1_race8.value,
          horse_2: horse2_race8.value,
          horse_3: horse3_race8.value,
          horse_4: horse4_race8.value,
        }
      }
    };


  console.log(data);

  horse1_race1.value="";
  horse2_race1.value="";
  horse3_race1.value="";
  horse4_race1.value="";

  horse1_race2.value="";
  horse2_race2.value="";
  horse3_race2.value="";
  horse4_race2.value="";

  horse1_race3.value="";
  horse2_race3.value="";
  horse3_race3.value="";
  horse4_race3.value="";

  horse1_race4.value="";
  horse2_race4.value="";
  horse3_race4.value="";
  horse4_race4.value="";

  horse1_race5.value="";
  horse2_race5.value="";
  horse3_race5.value="";
  horse4_race5.value="";

  horse1_race6.value="";
  horse2_race6.value="";
  horse3_race6.value="";
  horse4_race6.value="";

  horse1_race7.value="";
  horse2_race7.value="";
  horse3_race7.value="";
  horse4_race7.value="";

  horse1_race8.value="";
  horse2_race8.value="";
  horse3_race8.value="";
  horse4_race8.value="";

  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.race":data}});

}});

// Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.race":{"race_1": "5", "race_2":"10"}}})