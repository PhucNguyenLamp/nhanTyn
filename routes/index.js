var express = require('express');
var router = express.Router();
var Message = require('../model/Message');
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', async function(req, res, next) {
  // find first 10 newest messages using the date field
  let check = req.session.username ? true : false;
  let messages = await Message.find().sort({date: -1}).exec();
  console.log(messages)
  // reverse the order of the messages
  // messages = messages.reverse();
  // console.log(messages)
  res.render('index', { title: 'Express', messages: messages, check: check });
});

router.post('/', async function(req, res, next) {
  // Create a new message
  
  let newMessage = new Message({
    username: req.session.username || req.body.username,  // Use the session username if available, otherwise use the submitted username
    message: req.body.message,
    date: new Date()
  });

  await newMessage.save();
  if (!req.session.username) req.session.username = req.body.username
  console.log(req.session.username);
  res.redirect('/');

});
module.exports = router;
