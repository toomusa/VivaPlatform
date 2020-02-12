const db = require(".");

const userSeed = {
  fname: "John",
  lname: "Doe",
  type: "Client",
  lang: "en",
  email: "moose@moose.com",
  password: "moose"
}

const journeySeed = { 
  text: "My Journey", 
  goals: [
    { text: "Become Financially Stable", 
      category: "Finance",
      milestones: [
        { text: "Open a Savings Account", 
          tasks: [
            { text: "Gather 2 forms of ID and recent paystubs", 
              comments: [
                { text: "Would they accept a student ID?",
                  name: "Client" },
                { text: "Yes, just make sure you have your driver's license as well", 
                  name: "Coach" }
              ]
            },
            { text: "Visit community bank on Monday", 
              comments: [
                { text: "I'll have to go on Tuesday", 
                  name: "Client" }
              ]
            }
          ]
        },
        { text: "Save $500", 
          tasks: [
            { text: "Deposit $100 by end of January", 
              deadline: "01/31/2020", 
              comments: [] }
          ]
        }
      ]
    },
    { text: "Escape eviction and secure housing",
      category: "Housing", 
      milestones: [
        { text: "Organize housing-related files", 
          tasks: [
            { text: "Find rent payment receipts", 
              comments: []},
            { text: "Gather receipts for maintenance work", 
              comments: []},
            { text: "Find copy of original rental agreement", 
              comments: []}
          ]},
        { text: "File for rental extension", 
          tasks: [
            { text: "Speak with Mary about filling out the form", 
              comments: []},
            { text: "Contact landlord next week ", 
              comments: []}
          ]},
        { text: "Fix broken bedroom door", 
          tasks: [
            { text: "Check craigslist", 
              comments: []},
            { text: "See if Leon can help over the weekend", 
              comments: []}
          ]
        }
      ]
    },
    { text: "File my taxes and claim all available deductions",
      category: "Taxes", 
      milestones: [
        { text: "Request EIN", 
          tasks: [
            { text: "File form 1490", 
              comments: [
                { text: "Visit me at the office this week and we can do it together", 
                  name: "Coach" }
              ]
            }
          ]
        },
      { text: "Make appointment with Tax Advisor", 
        tasks: [
          { text: "Call 415-980-3245 and ask to speak with Leon", 
            comments: []}
        ]
      }
    ]}
  ]
}

module.exports = {
  seedDb: async () => {
    try {
      await db.User.deleteMany({});
      await db.Journey.deleteMany({});
    } catch (e) {
      throw e;
    }
    
    try {
      const newUser = await new db.User(userSeed);
      const newJourney = await new db.Journey(journeySeed);
      newJourney.user = newUser._id
      newUser.journey = newJourney._id;
      await newJourney.save();
      await newUser.save();
    } catch (e) {
      throw e;
    }
    
    try {
      const savedUser = await db.User.find({}).populate("journey");
    } catch (e) {
      throw e
    }
  }
} 
