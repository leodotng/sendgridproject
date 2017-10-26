var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'leong.jo@gmail.com',
  from: 'account-verification@waitticket.com',
  subject: 'test',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  id: "0668feb1-5667-496b-8a8e-87ec97cb66c4",
  template_id: "0668feb1-5667-496b-8a8e-87ec97cb66c4",
  active: 1,
  name: "usercreation",
  html_content: "<%body%>",
  plain_content: "<%body%>",
  subject: "<%subject%>",
  editor: "code",
  updated_at: "2014-03-19 18:56:33"

};
sgMail.send(msg);

module.exports = router;
