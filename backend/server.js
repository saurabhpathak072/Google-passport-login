/** @format */

const express = require('express');
const app = express();

const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');
const passportSetup = require('./passport');
const authRouter = require('./routes/auth');
app.use(
  cookieSession({
    name: 'session',
    keys: ['social'],
    maxAge: 24 * 60 * 60 * 100,
  }),
);

app.use(passport.initialize());

app.use(passport.session());

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  }),
);

app.use('/auth', authRouter);

app.listen('5000', () => {
  console.log('Server is running');
});
