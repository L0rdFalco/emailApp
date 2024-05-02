const { google } = require('googleapis');

const gmailScripts = require("../emailHelpers/gmail/gmailScripts.js")

exports.unreadGmailEmails = async function () {

    console.log("unread emails");

    try {
        const auth = await gmailScripts.authorize()


        const gmail = await google.gmail({ version: "v1", auth })

        const res = await gmail.users.messages.list({
            userId: 'me',
            maxResults: 10
        });

        const messages = res.data.messages;

        // console.log(messages);

        for (const message of messages) {
            const msg = await gmail.users.messages.get({
                userId: 'me',
                id: message.id
            });
            var b64string = msg.data.payload.body.data
            let decodedB64 = Buffer.from(b64string, 'base64');

            const decodedStr = Buffer.from(decodedB64, 'base64').toString('ascii')

            console.log(decodedStr);

            break
        }

    } catch (error) {

        console.log(error);
    }

}

exports.getGmailLabels = async function () {

    try {

        const auth = await gmailScripts.authorize()

        const gmail = await google.gmail({ version: "v1", auth })

        const res = await gmail.users.labels.list({
            userId: 'me',
        });
        const labels = res.data.labels;
        if (!labels || labels.length === 0) {
            console.log('No labels found.');
            return;
        }
        console.log('Labels:');
        labels.forEach((label) => {
            console.log(`- ${label.name}`);
        });
    } catch (error) {
        console.log(error);

    }
}
