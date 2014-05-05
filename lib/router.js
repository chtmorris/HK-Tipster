Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('hello', {
    path: '/',
    before: function () {
      if (! Meteor.user()) {
      this.render('home');
      this.stop();
      }
    }
  });
});

Router.map(function() {
  this.route('new', {path: '/new'});
});

Router.map(function() {
  this.route('home', {path: '/home'});
});

Router.map(function() {
  this.route('raceday', {path: '/raceday'});
});