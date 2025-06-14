const PackagesModel = require("../models/PackagesModel.js")
const SubscriptionModel = require("../models/SubscriptionModel.js")

exports.getTestPage = (request, response, next) => {
    try {

        response.status(200).render("test")

    } catch (error) {
        console.log(error);
        response.status(400).json({ message: "getTestPage failed" })
    }

}

exports.getSingleProvider = (request, response, next) => {
    try {

        response.status(200).render("single-provider")

    } catch (error) {
        console.log(error);
        response.status(400).json({ message: "getSingleProvider failed" })
    }

}

exports.getSingleMessageThread = (request, response, next) => {
    try {

        response.status(200).render("email-thread")

    } catch (error) {
        console.log(error);
        response.status(400).json({ message: "getSingleMessageThread failed" })
    }

}

exports.getSitemap = (request, response, next) => {
    try {
        response.sendFile("sitemap.xml", { root: '.' })

    } catch (error) {
        response.status(400).render("errorpage", { data: { status: 400, message: "couldn't get sitemap page" } })
    }

}

exports.getRobotsTXT = (request, response, next) => {
    try {
        response.sendFile("robots.txt", { root: '.' })

    } catch (error) {
        response.status(400).render("errorpage", { data: { status: 400, message: "couldn't get sitemap page" } })
    }

}

exports.getOffloadingPage = (request, response, next) => {
    try {

        response.status(200).render("offloading")

    } catch (error) {
        console.log(error);
        response.status(400).json({ message: "getTestPage failed" })
    }

}
exports.getHomePage = (request, response, next) => {
    try {

        response.status(200).render("home")

    } catch (error) {
        console.log(error);
        response.status(400).json({ message: "getHomePage failed" })
    }

}

exports.getLoginPage = (request, response, next) => {
    try {
        response.status(200).render("login")

    } catch (error) {
        response.status(400).json({ message: "getLoginPage failed" })
    }

}

exports.getSignupPage = (request, response, next) => {
    try {
        response.status(200).render("signup")

    } catch (error) {
        response.status(400).json({ message: "getSingupPage failed" })
    }

}

exports.getPricingPage = (request, response, next) => {
    try {
        response.status(200).render("pricing")

    } catch (error) {
        response.status(400).json({ message: "getPricingPage failed" })
    }

}

exports.getDashboardPage = (request, response, next) => {
    try {
        response.status(200).render("dashboard")


    } catch (error) {
        response.status(400).json({ message: "getDashboardPage failed" })
    }

}

exports.getActiveSubscriptionsPage = async (request, response, next) => {
    try {


        const subscriptionDocs = await SubscriptionModel.find({ user: request.user.id })

        response.status(200).render("subscriptions", {
            data: subscriptionDocs
        }


        )

    } catch (error) {
        response.status(400).json({ message: "getActiveSubscriptionsPage failed" })
    }

}

exports.getSavedImagesPage = (request, response, next) => {
    try {
        response.status(200).render("saved-images")

    } catch (error) {
        response.status(400).json({ message: "getSavedImagesPage failed" })
    }

}

exports.getOrderPage = async (request, response, next) => {
    try {


        // const currUser = await SocialUsersModel.findById(request.user.id)

        //get the last element in the generatedManuscripts array and get its boxid
        //query db for the ebook product model and set said info in the order page
        console.log("order type payload", request.params);

        let packageName = request.params.packageName

        const CurrentPackage = await PackagesModel.findOne({ name: packageName })

        let paypalUrl = null

        if (process.env.NODE_ENV === "production") {
            paypalUrl = 'https://www.paypal.com/sdk/js?client-id=ARbrF0_8Vj4bybSyvQVFobLPkXB16NhCf7ev7lhbLxpHqTPMXTe2chGOijPlqU5o1goFiHQfF1Il8sX6&currency=USD'

        }
        else if (process.env.NODE_ENV === "development") {
            paypalUrl = 'https://www.paypal.com/sdk/js?client-id=AcJ_7BJdbdAszTLfZC1v8qNZo0gofMOVtr7iZ7X29AxloH7167Sq0mLn0prcFxgLWJcs4t1NQycOQt3O&currency=USD'
        }


        response.status(200).render("orderpage", {
            data: {
                id: CurrentPackage.id,
                name: CurrentPackage.name,
                price: CurrentPackage.price,
                desc: CurrentPackage.description,
                url: paypalUrl
            }
        })

    } catch (error) {
        response.status(400).render("errorpage", { data: { status: 400, message: "couldn't get order page" } })
    }

}

exports.getForgotPasswordPage = (request, response, next) => {
    try {
        response.status(200).render("forgot-password")

    } catch (error) {
        response.status(400).json({ message: "getProfilePage failed" })
    }

}

exports.getResetPasswordPage = (request, response, next) => {
    try {
        response.status(200).render("reset-password")

    } catch (error) {
        response.status(400).json({ message: "getProfilePage failed" })
    }

}