const express = require("express")

const authController = require("../controllers/authController.js")
const viewsController = require("../controllers/viewsController.js")

const ViewsRouter = express.Router()

ViewsRouter.route("/").get(authController.isLoggedIn, viewsController.getHomePage)
ViewsRouter.route("/test").get(viewsController.getTestPage)
ViewsRouter.route("/s/:provider").get(viewsController.getSingleProvider)
ViewsRouter.route("/m/:id").get(viewsController.getSingleMessageThread)
ViewsRouter.route("/sitemap.xml").get(viewsController.getSitemap)
ViewsRouter.route("/robots.txt").get(viewsController.getRobotsTXT)
ViewsRouter.route("/offload").get(viewsController.getOffloadingPage)
ViewsRouter.route("/login").get(viewsController.getLoginPage)
ViewsRouter.route("/signup").get(viewsController.getSignupPage)
ViewsRouter.route("/orderpage/:packageName").get(authController.protect, viewsController.getOrderPage)
ViewsRouter.route("/forgotpw").get(viewsController.getForgotPasswordPage)
ViewsRouter.route("/resetpw").get(viewsController.getResetPasswordPage)

ViewsRouter.route("/pricing").get(viewsController.getPricingPage)
ViewsRouter.route("/dashboard").get(authController.protect, viewsController.getDashboardPage)
ViewsRouter.route("/subs").get(authController.protect, viewsController.getActiveSubscriptionsPage)
module.exports = ViewsRouter;

