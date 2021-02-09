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

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    const path = require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}


app.listen(PORT,()=>{
    console.log("server running on "+ PORT)
})