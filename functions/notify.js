const nodemailer = require('nodemailer');
import { config as dotenvConfig } from 'dotenv'

// Import possible local configuration
// You could load local settings with command:
// ln -s .env.development .env
dotenvConfig();

// @see configuration to send test emails
// https://nodemailer.com/about/
exports.handler = function (event, context, callback) {

  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SENDER_USERNAME,
      pass: process.env.SENDER_PASSWORD
    }
  });

  transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject: process.env.SUBJECT + new Date().toLocaleString(),
    text: event.body
  }, function (error, info) {
    if (error) {
      callback(error);
    } else {
      callback(null, {
        statusCode: 200,
        body: "Ok"
      });
    }
  });
};
