const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const User = require('../models/user');
const saltRounds = 10;

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
});

// @desc    Register a new user
// @route   POST /auth
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }

    // Check if user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    // Hash password
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    // Send email for account confirmation
    const emailToken = generateToken(user.id, process.env.EMAIL_TOKEN_SECRET, '1d');
    const url = `${process.env.APP_URL}/auth/verify/${emailToken}`;
    transporter.sendMail({
        from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_ADDRESS}>`,
        to: email,
        subject: `[${process.env.MAIL_FROM_NAME}] Confirm Account`,
        html: `Please click this link to confirm your account: <a href="${url}">${url}</a>`
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
})

// @desc    Verify a user
// @route   GET /auth/verify/:token
// @access  Public
const verifyUser = asyncHandler(async (req, res) => {
    const decoded = jwt.verify(req.params.token, process.env.EMAIL_TOKEN_SECRET);

    // Check if user already verified
    const user = await User.findById(decoded.id);
    if (user?.verifiedAt) {
        return res.status(400).send('User already verified');
    }

    // Verify user
    user.verifiedAt = Date.now();
    await user.save();

    res.status(200).send('Your account has been verified');
})

// @desc    Authenticate a user
// @route   POST /auth/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check for user email
    const user = await User.findOne({ email });
    
    if (user && (await bcrypt.compare(password, user.password))) {
        // Check if user is verified
        if (!user?.verifiedAt) {
            res.status(403);
            throw new Error('User not verified');
        }

        // create JWTs
        const accessToken = generateToken(user.id, process.env.ACCESS_TOKEN_SECRET);
        const refreshToken = generateToken(user.id, process.env.REFRESH_TOKEN_SECRET, '30d');

        // Saving refreshToken with current user
        user.token = refreshToken;
        await user.save();

        // Creates Secure Cookie with refresh token
        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });

        res.json({ accessToken });
    } else {
        res.status(401);
        throw new Error('Invalid credentials');
    }
})

// @desc    Logout user
// @route   GET /auth/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
    // On client, also delete the accessToken
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); // No content
    const refreshToken = cookies.jwt;
    
    // Is refresh token in db?
    const user = await User.findOne({ token: refreshToken });
    if (user) {
        // Delete refresh token in db
        await user.updateOne({ $unset: { token:1 } });
    }

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true }); // secure: true - only serves on https
    res.sendStatus(204);
})

// @desc    Handle refresh token
// @route   GET /auth/refresh
// @access  Public
const handleRefreshToken = asyncHandler(async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;

    // Is refresh token in db?
    const user = await User.findOne({ token: refreshToken });
    if (!user) return res.sendStatus(403); // Forbidden

    // Evaluate jwt
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || user.id !== decoded.id) return res.sendStatus(403);
            const accessToken = generateToken(user.id, process.env.ACCESS_TOKEN_SECRET);
            res.json({ accessToken });
        }
    );
})

// Generate JWT
const generateToken = (id, secret, expiresIn = '15m') => {
    return jwt.sign({ id }, secret, { expiresIn });
}

module.exports = {
    registerUser,
    verifyUser,
    loginUser,
    logoutUser,
    handleRefreshToken
}