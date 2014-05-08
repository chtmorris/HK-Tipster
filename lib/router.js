Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('login', {
    path: '/',
    // onAfterAction: function() {
    //   if (Meteor.user()) {
    //     Router.go('home');
    //   }
    // }
  });
});

Router.map(function(logincheck) {
  this.route('home', {
    path: '/home',
    onBeforeAction: function () {
      if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
        } else {
          Router.go('login');
        }
      }
    }
  });
});

Router.map(function() {
  this.route('raceday', {
    path: '/raceday',
    onBeforeAction: function () {
      if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
        } else {
          Router.go('login');
        }
      }
    }
  });
});

Router.map(function() {
  this.route('profile', {
    path: '/profile',
    onBeforeAction: function () {
      if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
        } else {
          Router.go('login');
        }
      }
    }
  });
});
