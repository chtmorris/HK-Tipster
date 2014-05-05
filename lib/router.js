Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('hello', {path: '/'});
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

Router.map(function() {
  this.route('profile', {path: '/profile'});
});

Router.map(function() {
  this.route('switch', {path: '/switch'});
});