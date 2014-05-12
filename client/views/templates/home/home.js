Template.home.events({                                                                                    // 13
  'click #login-buttons-logout': function() {                                                                    // 14
    Meteor.logout(function() {                                                                                 // 15
      loginButtonsSession.closeDropdown();                                                                   // 16
    });                                                                                                        // 17
  }                                                                                                              // 18
});