Template.userProfile.isTrue = function() {
  return Session.get('isTrue');
};

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


// RACE 1
Template.racedayInput.events({'submit form#race-1' : function(event, template) {
  event.preventDefault();

  horse1_race1 = template.find("input[name=horse1_race1]");
  horse2_race1 = template.find("input[name=horse2_race1]");
  horse3_race1 = template.find("input[name=horse3_race1]");
  horse4_race1 = template.find("input[name=horse4_race1]");

  var data = {
    horse_1: horse1_race1.value,
    horse_2: horse2_race1.value,
    horse_3: horse3_race1.value,
    horse_4: horse4_race1.value
  };

  horse1_race1.value="";
  horse2_race1.value="";
  horse3_race1.value="";
  horse4_race1.value="";

  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.race.raceDate.race1":data}});
  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.score": 100}});
  compute_score();

}});


// RACE 2
Template.racedayInput.events({'submit form#race-2' : function(event, template) {
  event.preventDefault();

  horse1_race2 = template.find("input[name=horse1_race2]");
  horse2_race2 = template.find("input[name=horse2_race2]");
  horse3_race2 = template.find("input[name=horse3_race2]");
  horse4_race2 = template.find("input[name=horse4_race2]");

  var data = {
    horse_1: horse1_race2.value,
    horse_2: horse2_race2.value,
    horse_3: horse3_race2.value,
    horse_4: horse4_race2.value
  };

  horse1_race2.value="";
  horse2_race2.value="";
  horse3_race2.value="";
  horse4_race2.value="";

  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.race.raceDate.race2":data}});

}});


// RACE 3
Template.racedayInput.events({'submit form#race-3' : function(event, template) {
  event.preventDefault();

  horse1_race3 = template.find("input[name=horse1_race3]");
  horse2_race3 = template.find("input[name=horse2_race3]");
  horse3_race3 = template.find("input[name=horse3_race3]");
  horse4_race3 = template.find("input[name=horse4_race3]");

  var data = {
    horse_1: horse1_race3.value,
    horse_2: horse2_race3.value,
    horse_3: horse3_race3.value,
    horse_4: horse4_race3.value
  };

  horse1_race3.value="";
  horse2_race3.value="";
  horse3_race3.value="";
  horse4_race3.value="";

  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.race.raceDate.race3":data}});

}});


// RACE 4
Template.racedayInput.events({'submit form#race-4' : function(event, template) {
  event.preventDefault();

  horse1_race4 = template.find("input[name=horse1_race4]");
  horse2_race4 = template.find("input[name=horse2_race4]");
  horse3_race4 = template.find("input[name=horse3_race4]");
  horse4_race4 = template.find("input[name=horse4_race4]");

  var data = {
    horse_1: horse1_race4.value,
    horse_2: horse2_race4.value,
    horse_3: horse3_race4.value,
    horse_4: horse4_race4.value
  };

  horse1_race4.value="";
  horse2_race4.value="";
  horse3_race4.value="";
  horse4_race4.value="";

  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.race.raceDate.race4":data}});

}});


// RACE 5
Template.racedayInput.events({'submit form#race-5' : function(event, template) {
  event.preventDefault();

  horse1_race5 = template.find("input[name=horse1_race5]");
  horse2_race5 = template.find("input[name=horse2_race5]");
  horse3_race5 = template.find("input[name=horse3_race5]");
  horse4_race5 = template.find("input[name=horse4_race5]");

  var data = {
    horse_1: horse1_race5.value,
    horse_2: horse2_race5.value,
    horse_3: horse3_race5.value,
    horse_4: horse4_race5.value
  };

  horse1_race5.value="";
  horse2_race5.value="";
  horse3_race5.value="";
  horse4_race5.value="";

  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.race.raceDate.race5":data}});

}});


// RACE 6
Template.racedayInput.events({'submit form#race-6' : function(event, template) {
  event.preventDefault();

  horse1_race6 = template.find("input[name=horse1_race6]");
  horse2_race6 = template.find("input[name=horse2_race6]");
  horse3_race6 = template.find("input[name=horse3_race6]");
  horse4_race6 = template.find("input[name=horse4_race6]");

  var data = {
    horse_1: horse1_race6.value,
    horse_2: horse2_race6.value,
    horse_3: horse3_race6.value,
    horse_4: horse4_race6.value
  };

  horse1_race6.value="";
  horse2_race6.value="";
  horse3_race6.value="";
  horse4_race6.value="";

  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.race.raceDate.race6":data}});

}});


// RACE 7
Template.racedayInput.events({'submit form#race-7' : function(event, template) {
  event.preventDefault();

  horse1_race7 = template.find("input[name=horse1_race7]");
  horse2_race7 = template.find("input[name=horse2_race7]");
  horse3_race7 = template.find("input[name=horse3_race7]");
  horse4_race7 = template.find("input[name=horse4_race7]");

  var data = {
    horse_1: horse1_race7.value,
    horse_2: horse2_race7.value,
    horse_3: horse3_race7.value,
    horse_4: horse4_race7.value
  };

  horse1_race7.value="";
  horse2_race7.value="";
  horse3_race7.value="";
  horse4_race7.value="";

  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.race.raceDate.race7":data}});

}});


// RACE 8
Template.racedayInput.events({'submit form#race-8' : function(event, template) {
  event.preventDefault();

  horse1_race8 = template.find("input[name=horse1_race8]");
  horse2_race8 = template.find("input[name=horse2_race8]");
  horse3_race8 = template.find("input[name=horse3_race8]");
  horse4_race8 = template.find("input[name=horse4_race8]");

  var data = {
    horse_1: horse1_race8.value,
    horse_2: horse2_race8.value,
    horse_3: horse3_race8.value,
    horse_4: horse4_race8.value
  };

  horse1_race8.value="";
  horse2_race8.value="";
  horse3_race8.value="";
  horse4_race8.value="";

  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.race.raceDate.race8":data}});

}});

// function should pass in the Race_Date, Race Number, User_ID
var compute_score = function() {

  // initialize parameters
  var user_horse_selection = [1, 5, 3, 7];
  var high_score = 0;
  var user_score = Meteor.user().profile.score;
  var score_array = [];

  var win = Results.findOne().Race1.win;
  var place = Results.findOne().Race1.place;
  var quinella = Results.findOne().Race1.quinella;
  var quinella_place = Results.findOne().Race1.quinella_place;
  var tierce = Results.findOne().Race1.tierce;
  var trio = Results.findOne().Race1.trio;
  var first_4 = Results.findOne().Race1.first_4;
  var quartet = Results.findOne().Race1.quartet;
  var test = Results.findOne().Race1.test;

  console.log(high_score);

  // CHECK WIN
  for (key in user_horse_selection) {
    if (_.contains(win.win_combo, user_horse_selection[key])) {
      if (high_score < win.dividend) {
        high_score = win.dividend;
        console.log(user_horse_selection[key] + " won WIN.  The payout is " + win.dividend);
      }
     }
  }


  // CHECK PLACE
  var place_score = 0;

  for (key in user_horse_selection) {
    for (entry in place) {
      if (_.contains(place[entry].win_combo, user_horse_selection[key])) {
        place_score += place[entry].dividend;
        if (high_score < place_score) {
          high_score = place_score;
          console.log(user_horse_selection[key] + " won PLACE.  The dividend is " + place[entry].dividend);
        }
      }
    }
  }

  if (place_score > 0) {
  console.log("Total payout for place is " + place_score);
  place_score = 0;
  }

  // CHECK QUINELLA
  if ( (_.contains(user_horse_selection, quinella.win_combo[0])) && (_.contains(user_horse_selection, quinella.win_combo[1])) ) {

    console.log('success');
    if (high_score < quinella.dividend) {
      high_score = quinella.dividend;
      console.log(quinella.win_combo[0] + " and " + quinella.win_combo[1] + " won WIN.  The payout is " + quinella.dividend);
    }
  }

  // CHECk QUINELLA_PLACE
  for (entry in quinella_place) {

    if ((_.contains(user_horse_selection, quinella_place[entry].win_combo[0])) && (_.contains(user_horse_selection, quinella_place[entry].win_combo[1]))) {

      if (high_score < quinella_place[entry].dividend) {
        high_score = quinella_place[entry].dividend;
        console.log(quinella_place[entry].win_combo[0] + " and " + quinella_place[entry].win_combo[1] + " won QUINELLA_PLACE.  The payout is " + quinella_place[entry].dividend);
      }
    }
  }

  // CHECK TRIO
  if ( (_.contains(user_horse_selection, trio.win_combo[0])) && (_.contains(user_horse_selection, trio.win_combo[1])) && (_.contains(user_horse_selection, trio.win_combo[2])) ) {

    if (high_score < trio.dividend) {
      high_score = trio.dividend;
      console.log(trio.win_combo[0] + " and " + trio.win_combo[1] + " won WIN.  The payout is " + trio.dividend);
    }
  }

  // CHECK FIRST_4
  if ( (_.contains(user_horse_selection, first_4.win_combo[0])) && (_.contains(user_horse_selection, first_4.win_combo[1])) && (_.contains(user_horse_selection, first_4.win_combo[2])) && (_.contains(user_horse_selection, first_4.win_combo[3])) ) {

    if (high_score < first_4.dividend) {
      high_score = first_4.dividend;
      console.log(first_4.win_combo[0] + " and " + first_4.win_combo[1] + " won WIN.  The payout is " + first_4.dividend);
    }
  }


  console.log("The high score this race is: " + high_score);

}


  // LOOP THROUGH ALL TYPES OF PAYOUTS
      //  IF WINNING COMBO MATCHES USER SELECTION
            // IF DIVIDEND OF WINNING COMBO IS GREATER THAN high_score
            //   HIGH_SCORE = DIVIDEND

