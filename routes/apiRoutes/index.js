const router = require("express").Router();
const apiController = require("../../controllers/apiController")
const passportService = require("../../services/passport")
const authMiddlewares = require("../../middlewares/authMiddlewares");

router.route("/loaduser").get(authMiddlewares.requireAuth, apiController.loadUser)
router.route("/createjourney").post(apiController.createJourney)
router.route("/addgoal").post(apiController.addGoal)
router.route("/addmilestone").post(apiController.addMilestone)
router.route("/addtask").post(apiController.addTask)
router.route("/addcomment").post(apiController.addComment)
router.route("/removegoal").post(apiController.removeGoal)
router.route("/removemilestone").post(apiController.removeMilestone)
router.route("/removetask").post(apiController.removeTask)
router.route("/removecomment").post(apiController.removeComment)

module.exports = router;
