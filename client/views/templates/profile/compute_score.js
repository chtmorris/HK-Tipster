var compute_score = function() {

  var user_horse_selection = [1, 2, 3, 4];
  var high_score = Meteor.user().profile.score;
  console.log(high_score);
  var race = Results.findOne().Race1;

  // LOOP THROUGH ALL TYPES OF PAYOUTS
  for (payout in race) {

    console.log(payout.win);


      //  IF WINNING COMBO MATCHES USER SELECTION
            // IF DIVIDEND OF WINNING COMBO IS GREATER THAN high_score
            //   HIGH_SCORE = DIVIDEND
  }

}




// Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.race":{"race_1": "5", "race_2":"10"}}})

// Results.find().fetch().dividend
// undefined
// Results.findOne().dividend
// "599.5"
// Results.find().fetch()[0].dividend
// "599.5"