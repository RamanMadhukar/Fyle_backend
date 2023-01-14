const express = require('express');
const router = express.Router();

// importing routes
const { userDetail } = require('../controller/controller');

router.get("/username/:username", userDetail);


module.exports = router;
