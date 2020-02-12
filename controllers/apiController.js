const db = require("../models");

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}

module.exports = {
  loadUser: async (req, res) => {
    
    let userId = req.user._id;
    let validUser = {};
    
    try {
      validUser = await db.User.findById(userId, 
        "_id fname lname type email journey")
        .populate("journey")
    } catch (e) {
      res.status(404).json({e});
    }
    
     if (!isEmpty(validUser)) {
       res.json(validUser);
     } 
  },
  createJourney: async (req, res) => {
    const { userId } = req.body;
    
    let jDoc = await new db.Journey({ user: userId });
    await jDoc.save()

    let uDoc = await db.User.findById(userId)
    
    uDoc.journey = jDoc._id
    await uDoc.save()

    res.json(jDoc)
  }, 
  addGoal: async (req, res) => {
    const { journeyId, itemText } = req.body;
    let jDoc = await db.Journey.findById(journeyId)

    jDoc.goals.push({ 
        text: itemText,
        milestones: [] })

    await jDoc.save()

    res.json(jDoc)
  },
  addMilestone: async (req, res) => {
    const { goalId, journeyId, itemText } = req.body;
    let jDoc = await db.Journey.findById(journeyId)

    jDoc.goals.id(goalId)
      .milestones.push({ 
        text: itemText,
        tasks: [] })

    await jDoc.save()

    res.json(jDoc)
  },
  addTask: async (req, res) => {
    const { milestoneId, goalId, journeyId, itemText } = req.body;
    let jDoc = await db.Journey.findById(journeyId)

    jDoc.goals.id(goalId)
      .milestones.id(milestoneId)
      .tasks.push({ 
        text: itemText,
        comments: [] })

    await jDoc.save()

    res.json(jDoc)
  },
  addComment: async (req, res) => {
    const { taskId, milestoneId, goalId, journeyId, itemText } = req.body;
    let jDoc = await db.Journey.findById(journeyId)

    jDoc.goals.id(goalId)
      .milestones.id(milestoneId)
      .tasks.id(taskId)
      .comments.push({ 
        text: itemText,
        name: "Musa" })

    await jDoc.save()

    res.json(jDoc)
  },
  removeGoal: async (req, res) => {
    const { goalId, journeyId } = req.body;
    let jDoc = await db.Journey.findById(journeyId)

    jDoc.goals.id(goalId)
    .remove()

    await jDoc.save()

    res.json(jDoc)
  },
  removeMilestone: async (req, res) => {
    const { milestoneId, goalId, journeyId } = req.body;
    let jDoc = await db.Journey.findById(journeyId)

    jDoc.goals.id(goalId)
      .milestones.id(milestoneId)
      .remove()

    await jDoc.save()

    res.json(jDoc)
  },
  removeTask: async (req, res) => {
    const { taskId, milestoneId, goalId, journeyId } = req.body;
    let jDoc = await db.Journey.findById(journeyId)

    jDoc.goals.id(goalId)
      .milestones.id(milestoneId)
      .tasks.id(taskId)
      .remove()

    await jDoc.save()

    res.json(jDoc)
  },
  removeComment: async (req, res) => {
    const { commentId, taskId, milestoneId, goalId, journeyId } = req.body;
    let jDoc = await db.Journey.findById(journeyId)

    jDoc.goals.id(goalId)
      .milestones.id(milestoneId)
      .tasks.id(taskId)
      .comments.id(commentId)
      .remove()

    await jDoc.save()

    res.json(jDoc)
  },

}
