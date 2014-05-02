Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('hello', {path: '/'});
});

Router.map(function() {
  this.route('new', {path: '/new'});
});