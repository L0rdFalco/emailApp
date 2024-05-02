const express = require("express")
const emailController = require("../controllers/emailController.js");

const GmailRouter = express.Router();

GmailRouter.route("/unread").get(emailController.unreadGmailEmails);
GmailRouter.route("/labels").get(emailController.getGmailLabels);

module.exports = GmailRouter