Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() { return Meteor.subscribe('users'); }
});

Router.map(function() {
  this.route('login', {
    path: '/',
    onAfterAction: function () {
      if ( Meteor.user() || Meteor.loggingIn()) {
        Meteor.setTimeout(function() {
          Router.go('edit_profile');
        }, 100);
        console.log('user: ' + Meteor.user() + ' logging: ' + Meteor.loggingIn());
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

  this.route('scraping', {
    path: '/scraping',
    onBeforeAction: function () {
      this.subscribe('users').wait();
      if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
        } else {
          Router.go('login');
        }
      }
    }
  });


});

