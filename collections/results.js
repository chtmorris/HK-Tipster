Results = new Meteor.Collection('results');

if (Results.find().count() === 0) {

    Results.insert({

         Race1: {
           win              :     {
                                    win_combo: [4],
                                    dividend: 599.5
                                  },

           place            :     [
                                  {
                                    win_combo: [4],
                                    dividend: 98.5
                                  },
                                  {
                                    win_combo: [10],
                                    dividend: 41
                                  },
                                  {
                                    win_combo: [1],
                                    dividend: 33
                                  }
                                  ],

           quinella         :     {
                                    win_combo: [4, 10],
                                    dividend: 4458.5
                                  },

           quinella_place   :     [
                                  {
                                    win_combo: [4, 10],
                                    dividend: 1121.5
                                  },
                                  {
                                    win_combo: [1,4],
                                    dividend: 536
                                  },
                                  {
                                    win_combo: [1,10],
                                    dividend: 355.3
                                  }
                                  ],

           trio             :     {
                                    win_combo: [1, 4, 10],
                                    dividend: 12503
                                  },

           first_4          :     {
                                    win_combo: [1, 4, 8, 10],
                                    dividend: 395726
                                  },

         }
    })

}
