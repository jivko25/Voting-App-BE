const router = require("express").Router();

const homeController = require("./controllers/homeController");
const proposalController = require("./controllers/proposalController");
const authController = require("./controllers/authController");
router.use("/", homeController);
router.use("/proposals", proposalController);
router.use("/auth", authController);
module.exports = router;
