const express = require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys');
const connectDB = require('./config/db');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./models/User')

connectDB()

const app = express();

app.use(
    cookieSession({
        maxAge:30 * 24 * 60 * 60 *1000,
        keys:[keys.cookieKey]
    })
)

app.use(passport.initialize());
app.use(passport.session())

const PORT  = process.env.PORT || 5000

require('./services/passport')

require('./routes/authRoute')(app)

app.listen(PORT,()=>{
    console.log("server running on "+ PORT)
})