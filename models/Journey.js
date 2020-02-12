const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema ({
  text: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  flagged: {
    type: Boolean,
    default: false
  },
  emojis: [],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  coach: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  recs: {
    type: Schema.Types.ObjectId,
    ref: "Resource"
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Task"
  }
})

const TaskSchema = new Schema ({
  text: {
    type: String,
    default: ''
  },
  completed: {
    type: Boolean,
    default: false
  },
  progress: {
    type: Number,
    default: 0
  },
  recs: {
    type: Schema.Types.ObjectId,
    ref: "Resource"
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Milestone"
  },
  comments: [ CommentSchema ]
})

const MilestoneSchema = new Schema ({
  text: {
    type: String,
    default: ''
  },
  completed: {
    type: Boolean,
    default: false
  },
  progress: {
    type: Number,
    default: 0
  },
  recs: {
    type: Schema.Types.ObjectId,
    ref: "Resource"
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Journey"
  },
  tasks: [ TaskSchema ]
})

const GoalSchema = new Schema ({
  text: {
    type: String,
    default: ''
  },
  completed: {
    type: Boolean,
    default: false
  },
  progress: {
    type: Number,
    default: 0
  },
  recs: {
    type: Schema.Types.ObjectId,
    ref: "Resource"
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Journey"
  },
  milestones: [ MilestoneSchema ]
})

const JourneySchema = new Schema ({
  text: {
    type: String,
    default: "My Journey"
  },
  category: {
    type: String,
    default: ''
  },
  goals: [ GoalSchema ],
  completed: {
    type: Boolean,
    default: false
  },
  progress: {
    type: Number,
    default: 0
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  coach: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  recs: {
    type: Schema.Types.ObjectId,
    ref: "Resource"
  }
})

const Journey = mongoose.model("Journey", JourneySchema);

module.exports = Journey;