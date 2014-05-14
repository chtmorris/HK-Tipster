// Template.home.helpers({
//   tipster: function() {
    // var data = [];

    // Meteor.users.find().forEach( function(obj) {
    //   p1 = {
    //     tipsterName: obj.profile.name,
    //     score: obj.profile.score,
    //     pic: obj.profile.url,
    //     // createdAt: obj.createdAt,
    //     _id: obj._id
    //   };

    //   data.push(p1);
    // });

    // return data;
//   }
// });

Template.home.tipster = function () {

   var data = [];

   Meteor.users.find({}, {sort: {"profile.score": -1} }).forEach( function(obj) {
      p1 = {
        tipsterName: obj.profile.name,
        score: obj.profile.score,
        pic: obj.profile.url,
        // createdAt: obj.createdAt,
        _id: obj._id
      };

      data.push(p1);
    });

  return data;

  // return Meteor.users.find({}, {sort: {tipsterName: -1}});
};

// return data.find({}, {sort: {score: -1}});