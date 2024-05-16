const router = require('express').Router();

router.get("/", function (req, res) {
    res.json({ message: "Hello, world!", status: "success", code: 200 });
});

module.exports = router;