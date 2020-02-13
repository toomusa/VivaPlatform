const router = require("express").Router();
const htmlRoutes = require("./htmlRoutes");
const authRoutes = require("./authRoutes");
const apiRoutes = require("./apiRoutes");

router.use("/auth", authRoutes);
router.use("/api", apiRoutes);
// router.use("/", htmlRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
