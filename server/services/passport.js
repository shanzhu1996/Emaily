const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');
passport.serializeUser((user, done) => {
    done(null, user.id);    // Idenfify user id, assigned by Mongo
});

passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => {
        done(null, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
    }, 
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleId: profile.id });
        if(existingUser) {
            // already have a record with the given profile ID
            done(null, existingUser);
        } else {
            // don;t have a record with this ID, make a new user
            const user = await new User({ googleId: profile.id }).save();
            done(null, user);
        }
    })
);