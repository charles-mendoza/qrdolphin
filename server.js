const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/db');
const port = process.env.PORT || 3001;

connectDB();

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// build-in middleware for json
app.use(express.json());

// middleware for cookies
app.use(cookieParser());

// routes
app.get('^/$|/index(.html)?', (req, res) => res.sendStatus(401));
app.use('/auth', require('./routes/auth'));
app.use('/api/qrcodes', require('./routes/qrcodes'));
app.all('*', (req, res) => res.sendStatus(404));

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));