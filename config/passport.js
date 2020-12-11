const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const {User} = require('../models/hospital');

module.exports = function(passport){
    passport.use(
        new LocalStrategy({usernameField: 'email'}, (email, password, done)=>{
            User.findOne({email: email}, (err, user)=>{
                if(!user){
                    return done(null, false, {message: 'This User is not Registered'});
                } else {
                    if(!user.userverified){
                        return done(null, false, {message: 'Please click on the verification link sent to your email'});
                    }
                    bcrypt.compare(password, user.password, (err, isMatch)=>{
                        if(err) throw err;
                        if (isMatch){
                            return done(null, user)
                        }else{
                            return done(null, false, {message: 'Incorrect email or password'});
                        }
                    });
                    
                }
            });
        })
    );
    passport.serializeUser((user, done)=>{
        done(null, user.id);
    });
    
    passport.deserializeUser((id, done) => {
        User.findById(id, function(err, user) {
        done(err, user);
        });
    });
}
