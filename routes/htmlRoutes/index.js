const router = require("express").Router();
const authMiddlewares = require("../../middlewares/authMiddlewares");
const passportService = require("../../services/passport");
const path = require("path");

router.route("/")
    .get( (req, res) => {
        res.setHeader("Content-Type", "text/javascript");
        res.sendFile(path.resolve('client', 'build', 'index.html'));
    });

router.route("/test")
    .get(authMiddlewares.requireAuth, (req, res) => {
        res.send(req.user);
    })

router.use(function(req, res) {
    res.setHeader("Content-Type", "text/javascript");
    res.sendFile(path.resolve('client', 'build', 'index.html'));
    });
// Auth protected routes
// router.route("/")
//     .get(authMiddlewares.requireAuth, todoController.getTodos)
//     .post(authMiddlewares.requireAuth, todoController.createTodo);

module.exports = router;
