const express = require('express');
const { postUser } = require('../controllers/user/UserActions');
const router = express.Router();

router.get("/user", postUser)

module.exports = router;