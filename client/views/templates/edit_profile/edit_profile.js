Template.edit_profile.events({'submit form#name_submit' : function(event, template) {
  event.preventDefault();

  name_input = template.find("input[name=user_name]");
  pic_input = template.find("input[name=user_pic]");

  if (pic_input.value === "") {
    pic_input.value = "http://funny-pictures.funmunch.com/pictures/Sumo-Jockey.jpg";
  };

  var data = {
    name: name_input.value,
    url: pic_input.value,
  };

  name_input.value="";
  pic_input.value="";


  var data2 = {
    horse_1: "",
    horse_2: "",
    horse_3: "",
    horse_4: ""
  };

  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile":data}});
  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.race.raceDate.race1":data2}});
  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.race.raceDate.race2":data2}});
  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.race.raceDate.race3":data2}});
  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.race.raceDate.race4":data2}});
  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.race.raceDate.race5":data2}});
  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.race.raceDate.race6":data2}});
  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.race.raceDate.race7":data2}});
  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.race.raceDate.race8":data2}});

  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.score": 0}});
  Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.race.raceDate.followee": []}});

  Router.go('home');
}});