const path = require("path");
const express = require('express');
const app = express();
const router = require("express").Router();
const { ensureAuth, ensureGuest} = require('../middleware/auth') // this is not working

router.get("/", ensureGuest, function (res, req) {
  res.sendfile(path.join(__dirname, "../client/src/pages/landingpage"));
})

router.get("/about", ensureAuth, function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/src/pages/about"));
});

// if above doesnt work, use below
// router.get('/about', ensureAuth, async (req, res) => {
//   try {
//     const stories = await Story.find({ user: req.user.id }).lean()
//     res.render('dashboard', {
//       name: req.user.firstName,
//     })
//   } catch (err) {
//     console.error(err)
//     res.render('error/500')
//   }
// })
router.get("/expensetracker", ensureAuth, function (req, res) {
  res.sendFile(path.join(__dirname, "../client/src/pages/expensetracker"));
});

router.get("/portfolio", ensureAuth, function (req, res) {
  res.sendFile(path.join(__dirname, "../client/src/pages/portfolio"));
});

module.exports = router