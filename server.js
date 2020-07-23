const path = require('path');
const express = require('express');
const connectDB = require('./config/db'); 
const exphbs = require("express-handlebars")
const mongoose = require('mongoose');
const morgan = require('morgan')
const dotenv = require('dotenv');
const passport = require('passport');
const transactions = require('./routes/transactions');
const authroutes = require("./routes/auth")
const htmlroutes = require('./routes/htmlroutes')
const expressSession = require('express-session')
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);
const PORT = process.env.PORT || 5000;

dotenv.config({path:'./.env'});
console.log(require('dotenv').config())

connectDB();
const app = express();
// Passport config
require('./config/passport');
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)

if (process.env.NODE_ENV === "development") {
  app.use(morgan('dev'));
  
}
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}




// require ('./routes/loginUser')(app);
// require('./routes/registerUser')(app);
// require('./routes/findUsers')(app);
// require('./routes/deleteUser')(app);
// require('./routes/updateUser')(app);
// Sessions
app.use(
  session({
    secret: process.env.GOOGLE_CLIENT_SECRET,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
       mongooseConnection: mongoose.connection,
       url: process.env.MONGO_URI,
       autoReconnect: true,
     }),
  })
)

// Send every other request to the React app

// We need to use sessions to keep track of our user's login status
app.use(passport.initialize());
app.use(passport.session());

// Define API routes here
// app.use('/api/v1/transactions', transactions);
// set up routes
app.use('/', require("./routes/index"))
app.use('/', htmlroutes);
app.use('/auth', authroutes);
app.use('/transactions', transactions);

//Handlebars
app.engine('.hbs', exphbs({defaultLayout:'main', extname:'.hbs'}));
app.set('view engine', '.hbs')

// Set global var
app.use(function (req, res, next) {
  res.locals.user = req.user || null
  next()
})

// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});



