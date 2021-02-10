const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose')
const User = mongoose.model('users')

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user)
    })
})

passport.use(
    new GoogleStrategy({
        clientID:keys.googleClientID,
        clientSecret:keys.googleClientSecret,
        callbackURL:"/auth/google/callback",
        proxy:true,
    }, async (accessToken, refreshToken, profile,done) =>{
        console.log(profile)
        const existingUser = await User.findOne({"googleId":profile.id});
        console.log('existingUser', existingUser)
        if (existingUser){
            return done(null, existingUser)
        }else{
            new User({
                username: profile.displayName,
                googleId: profile.id,
                picture:profile._json.picture,
                email: profile.emails[0].value
            }).save().then((newUser)=>{
                console.log('New User created: ', newUser)
            })
        }
        
    }
    )
)