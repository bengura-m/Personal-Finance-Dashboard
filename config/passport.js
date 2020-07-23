
const GoogleStrategy = require('passport-google-oauth20').Strategy
const _ = require("lodash");
const User = require('../models/User')
const keys = require('./authkeys');
const passport = require('passport')
const { Strategy: LocalStrategy } = require("passport-local");

// module.exports = function (passport) {
//   passport.use(
//     new GoogleStrategy(
//       {
//         clientID: keys.google.clientID,
//         clientSecret: keys.google.clientSecret,
//         callbackURL: '/auth/google/callback',
//       },
//       async (accessToken, refreshToken, profile, done) => {
//         const newUser = {
//           googleId: profileObj.googleId,
//           displayName: profileObj.displayName,
//           firstName: profileObj.givenName,
//           lastName: profileObj.familyName,
//           image: profileObj.imageUrl,
//         }

//         try {
//           let user = await User.findOne({ googleId: profile.id })

//           if (user) {
//             done(null, user)
//           } else {
//             user = await User.create(newUser)
//             done(null, user)
//           }
//         } catch (err) {
//           console.error(err)
//         }
//       }
//     )
//   )

//   passport.serializeUser((user, done) => {
//     done(null, user.id)
//   })

//   passport.deserializeUser((id, done) => {
//     User.findById(id, (err, user) => done(err, user))
//   })
// }
passport.serializeUser((user, done) => {
  console.log('serialize user');
  console.log({user});
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
    console.log("deserialize user");

    User.findById(id, (err, user) => {
        console.log('deserialise');
        console.log({user});
        done(err, user);
    });
});

passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  console.log({email});
  User.findOne({ email }, (err, user) => {
    if (err) { return done(err); }
    if (!user) {
        // done(err, user, info pass back to controller)
      return done(null, false, { msg: `Email ${email} not found.` });
    }
    if (!user.password) {
      return done(null, false, { msg: 'Please enter a password.' });
    }
    user.comparePassword(password, (err, isMatch) => {
      if (err) { return done(err); }
      if (isMatch) {
        return done(null, user);
      }
      return done(null, false, { msg: 'Invalid email or password.' });
    });
  });
}));


module.exports = passport