const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

router.post('/register', limiter, registerUser);
router.post('/login', limiter, loginUser);

module.exports = router;
