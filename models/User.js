const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const passport = require('passport')

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

/**
 * Password hash middleware.
 */
UserSchema.pre("save", async function save(next) {
  const user = this;
  if (!user.isModified("password")) {
      return next();
  }

  // register
  // enter password
  // go thru bcrypt
  // bcrypt adds salt
  // adawdwdwadaw
  
  // login
  // enter passsword
  // bcrypt => add salt to entered password
  // encrypt
  // compare if same as db record

  // bcrypt('secret')  // dowapodawd    == > secret
  // bcrypt('secret+23132')  // dwadwaweqew12e

  await bcrypt
      .genSalt(10)
      .then((salt) => {
          return bcrypt.hash(user.password, salt);
      })
      .then((hash) => {
          user.password = hash;
          next();
      })
      .catch((err) => {
          return next(err);
      });
});

/**
* Helper method for validating user's password.
*/
UserSchema.methods.comparePassword = function comparePassword(
  candidatePassword,
  cb
) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      cb(err, isMatch);
  });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;