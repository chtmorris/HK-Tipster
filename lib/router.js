Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() { return Meteor.subscribe('users'); }
});

Router.map(function() {
  this.route('login', {
    path: '/',
    onBeforeAction: function () {
      if ( Meteor.user()) {
        if (Meteor.loggingIn()) {
          Router.go('edit_profile');
        } else {
          Router.go('edit_profile');
        }
      }
    }
  });

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

  this.route('edit_profile', {
    path: '/edit',
    onBeforeAction: function () {
      if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
        } else {
          Router.go('login');
        }
      }
    }
  });

  this.route('tipster_profile', {
    path: '/tipster/:_id',
    onBeforeAction: function () {
      this.subscribe('users').wait();
      if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
        } else {
          Router.go('login');
        }
      }
    }
//ADD DATA PROPERTY
  });
});

