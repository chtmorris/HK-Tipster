Results = new Meteor.Collection('results');

if (Results.find().count() === 0) {

    // Results.insert({
    //   Race1: {
    //     win: {winning_combination: [4,], dividend: 599.5}


    //   }
    // });

    Results.insert({

         Race1: {
           win              :     { win_comb: 4,
                                    dividend: 599.5
                                  },

           place            :     [
                                  {
                                    win_comb: 4,
                                    dividend: 98.5
                                  },
                                  {
                                    win_comb: 10,
                                    dividend: 41
                                  },
                                  {
                                    win_comb: 1,
                                    dividend: 33
                                  }
                                  ],

           quinella         :     { win_comb: [4, 10],
                                    dividend: 4458.5
                                  },

           quinella_place   :     { win_comb: [[4, 10],[1,4],[1,10]],
                                    dividend: [1121.5, 536, 355.3]
                                  },

           tierce           :     { win_comb: [[4, 10, 1]],
                                    dividend: [83341]
                                  },

           trio             :     { win_comb: [[1, 4, 10]],
                                    dividend: [12503]
                                  },

           first_4          :     { win_comb: [[1, 4, 8, 10]],
                                    dividend: [395726]
                                  },

           quartet          :     { win_comb: [[4, 10, 1, 8]],
                                    dividend: [395726]
                                  }
         }
    })

}
