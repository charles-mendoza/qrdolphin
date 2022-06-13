const express = require('express');
const router = express.Router();
const {
    registerUser,
    verifyUser,
    loginUser,
    logoutUser,
    handleRefreshToken
} = require('../controllers/authController');

router.route('/').post(registerUser);
router.route('/verify/:token').get(verifyUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);
router.route('/refresh').get(handleRefreshToken);

module.exports = router