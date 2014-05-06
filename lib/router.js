Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('login', {
    path: '/',

    onAfterAction: function() {
      if (Meteor.user()) {
        this.render('home');
      }
    }
  });
});

Router.map(function() {
  this.route('home', {
    path: '/home'
    // ,

    // onAfterAction: function () {
    //   if (! Meteor.user()) {
    //     Router.go('login');
    //   }
    // }
  });
});

Router.map(function() {
  this.route('raceday', {path: '/raceday'});
});

Router.map(function() {
  this.route('profile', {path: '/profile'});
});