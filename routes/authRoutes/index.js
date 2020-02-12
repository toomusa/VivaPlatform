const router = require("express").Router();
const authController = require("../../controllers/authController");
const passportService = require("../../services/passport")
const authMiddlewares = require("../../middlewares/authMiddlewares");

router.route("/signup")
    .post(authController.signup);

router.route("/login")
    .post(authMiddlewares.requireSignIn, authController.login);

module.exports = router;
