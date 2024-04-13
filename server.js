const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config({ path: "./config.env" })

const app = require("./app.js")

const port = process.env.PORT || 8081

async function mongoConnection() {

    try {

        return await mongoose.connect(process.env.MONGO_CONN_STR)


    } catch (error) {

        console.log("mongoConnection error");

    }
}


async function nodeServerInit() {
    let res = null


    while (true) {
        res = await mongoConnection()

        if (res) {
            app.listen(port, () => {
                console.log(`email notifier app listening on port ${port}`);
            })

            break
        }

    }



}

nodeServerInit()