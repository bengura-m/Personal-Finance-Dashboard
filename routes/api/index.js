const router = require("express").Router();
const authRoutes = require("./auth");
const htmlRoutes = require('./htmlroutes')
const stockRoutes = require('./stockroutes')
const transactions = require('../transactions')
const AuthenticatedMiddleware = require ('../../middleware/AuthenticatedMiddleware')

// Post routes

router.use(AuthenticatedMiddleware)
router.use('/', htmlRoutes);
router.use("/auth", authRoutes);
router.use('/transactions', transactions)
router.use("/books", stockRoutes);

module.exports = router;


// const path = require("path");
// const express = require('express');
// const router = require("express").Router();
// const { ensureAuth, ensureGuest} = require('../middleware/auth') // this is not working

// router.get("/", ensureGuest,(res, req) => {
//   res.render ('login', {
//       layout : 'login',
//   })
// })

// router.get("/about", ensureAuth,(res, req) => {
//     res.render ('about', {
//         layout : 'about',
//     })
// })
  
// router.get("/expensetracker", ensureAuth,(res, req) => {
//     res.render ('expensetracker', {
//         layout : 'expensetracker',
//     })
// })

// router.get("/portfolio", ensureAuth,(res, req) => {
//     res.render ('portfolio', {
//         layout : 'portfolio',
//     })
// })

// router.get('/logout', (req, res) => {
//     req.logout()
//     res.redirect('/')
//   })
  
// // 
// router.get("/about", ensureAuth, function (req, res) {
//   res.sendFile(path.join(__dirname, "../../client/src/pages/about"));
// });

// // if above doesnt work, use below
// // router.get('/about', ensureAuth, async (req, res) => {
// //   try {
// //     const stories = await Story.find({ user: req.user.id }).lean()
// //     res.render('dashboard', {
// //       name: req.user.firstName,
// //     })
// //   } catch (err) {
// //     console.error(err)
// //     res.render('error/500')
// //   }
// // })
// router.get("/expensetracker", ensureAuth, function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/src/pages/expensetracker"));
// });

// router.get("/portfolio", ensureAuth, function (req, res) {
//   res.sendFile(path.join(__dirname, "../client/src/pages/portfolio"));
// });

// module.exports = router